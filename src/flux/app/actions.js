export const SET_PROP = 'APP_SET_PROP',
  SET_TITLE = 'APP_SET_TITLE',

  setProp = prop => {
    return {
      type: SET_PROP,
      prop
    };
  },

  setTitle = title => {
    return {
      type: SET_TITLE,
      title
    };
  };
