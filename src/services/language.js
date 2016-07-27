import importedLibs from 'lang';
import Kleio from 'kleio';
import store from 'flux/store';
import deepExtend from 'deep-extend';

/**
 * Service that manages imported language libs. Based on language code
 */
class LanguageService {
  constructor(language = LanguageService.defaultLanguage) {
    const kleio = new Kleio(null, Kleio.ENV_MODES.DEV);

    this._record = kleio.record.bind(kleio);

    this._listeners = [];

    this.language = language;

    this._setLanguageFromStore();
    store.subscribe(this._setLanguageFromStore);
  }

  static defaultLanguage = 'en';

  /**
   * Returns the current country code.
   *
   * @return {String} country code
   */
  get language() {
    return this._languageCode;
  }

  /**
   * Set the current code and update the lodaded language file.
   *
   * @param  {String} value country code specification, ex: en
   */
  set language(value = LanguageService.defaultLanguage) {
    if (typeof value !== 'string') {
      const error = new Error('Passed language value must be of type string.');
      this._record(
        'LanguageService',
        'Invalid type was passed to set language',
        Kleio.levels.INFO,
        error.stack, {
          value
        }
      );

      throw error;
    }

    this._languageCode = value;

    this._setLanguageLibrary();
    this._triggerListeners();
  }

  _setLanguageFromStore = () => {
    const app = store.getState().app;

    if (app.language !== this.language) {
      this.language = app.language;
    }
  };

  /**
   * _getLanguageCodeHierarchy Create array of language codes based on current language code..
   * Example: If  current language code is 'sv_SE', return value would be `['en', 'sv', 'sv_SE]`
   * @return {array} Array of language codes
   */
  _getLanguageCodeHierarchy() {
    return (this._languageCode ? this._languageCode : LanguageService.defaultLanguage)
      .split('_')
      .reduce((prevValue, currentValue, currentIndex) => {
        const newValue = (currentIndex === 0) ? currentValue : `${prevValue[prevValue.length - 1]}_${currentValue}`;

        if (prevValue.indexOf(newValue) === -1) {
          return prevValue.concat(newValue);
        }

        return prevValue;
      }, [LanguageService.defaultLanguage]);
  }

  /**
   * Creates a language object based on the currently defined language code.
   */
  _setLanguageLibrary() {
    const translations = {},
      languageCodes = this._getLanguageCodeHierarchy();

    languageCodes.forEach(languageCode => {
      deepExtend(translations, importedLibs[languageCode] || {});
    });

    this._currentLibrary = translations;
  }

  /**
   * Registration method to hook on lanugage listener. Automatically unsubscribe on unmount.
   *
   * @param  {ReactComponent} context component context.
   */
  use(context) {
    let functionBody = '';
    this._listeners.push(context);
    context.T = this;

    // React will sometimes set an invalid function body
    // https://gyazo.com/05d6336c9d735e5fb96d11259db820a6
    if (
      typeof context.componentWillUnmount === 'function' &&
      context.componentWillUnmount.toString() !== '<method was deleted>'
    ) {
      functionBody = context.componentWillUnmount
        .toString()
        .trim()
        .replace('function componentWillUnmount() {', '')
        .replace(/}$/, '');
    }

    context.componentWillUnmount = new Function(`
      ${functionBody || ''}
      if(this.T) {
        this.T.unsubscribe(this);
      }
    `);
  }

  unsubscribe(context) {
    this._listeners.splice(this._listeners.indexOf(context), 1);
  }

  /**
   * Trigger a re-render for all listeners.
   */
  _triggerListeners() {
    for (let i = 0; i < this._listeners.length; i++) {
      try {
        this._listeners[i].forceUpdate();
      } catch (e) {
        this._record(
          'Language service',
          'Failed to re-render component on language lib change.',
          Kleio.levels.warn,
          e.stack,
          { param: this._listeners ? this._listeners[i] : null }
        );
      }
    }
  }
}

const languageService = new LanguageService();

export default new Proxy(languageService, {
  get(target, name, receiver) {
    return target._currentLibrary[name] || target[name];
  }
});
