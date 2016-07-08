/**
 * Validates react-redux forms.
 *
 * @param {Object} form   Representation of the form.
 * @param {Object} fields A Object specific.
 *
 * @return {Object} Error specification.
 */
function validate(form, fields = {}) {
  if (typeof fields !== 'object') {
    throw new Error(`Parameter: field: should be of type "object", not ${typeof fields}`);
  }

  const errors = {};

  try {
    // Set error message if specified field attribute doesn't exists in form object.
    Object.keys(fields).forEach(attr => {
      if (!form.hasOwnProperty(attr)) {
        errors[attr] = fields[attr].message;
      }

      // Evaluate each custom rule.
      if (Array.isArray(fields[attr].rules)) {
        errors[attr] = fields[attr].rules.map(test => {
          return test.rule(form[attr]) ? null : test.message;
        });
      }
    });
  } catch (e) {
    // FIXME: Replace with error service.
    console.warn(`Failed to fields object`, e);
  }

  return errors;
}

export default validate;
