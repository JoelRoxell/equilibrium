import { formValidator } from 'helpers';

describe('#Form validator', () => {
  it('-Validate string length', () => {
    const fieldRules = {
      password: {
        type: 'text',
        message: 'Password is a required field.',
        rules: [
          {
            rule: function(value) {
              return value.length > 6;
            },
            message: 'String length must be > 6'
          }
        ]
      }
    };

    let res = formValidator({
      password: 'assdd'
    }, fieldRules);

    expect(res.password[0]).to.equal('String length must be > 6');
  });
});
