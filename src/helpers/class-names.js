/**
 * Returnes a compried className string of passed arguments
 *
 * @return {string} Comprised classname string
 */
function classNames() {
  let className = '';

  for (let i = 0; i < arguments.length; i++) {
    let obj = arguments[i];

    if (typeof obj === 'object') {
      let attributeName = Object.keys(obj)[0];

      if (obj[attributeName]) {
        className += ` ${attributeName}`;
      }
    } else if (typeof obj === 'string') {
      className += ` ${obj}`;
    }
  }

  return className.replace(' ', '');
}

export default classNames;
