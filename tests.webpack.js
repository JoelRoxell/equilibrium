var context = require.context('./src', true, /-test\.js$/); // eslint-disable-line
console.log('Context: ', context);
context.keys().forEach(context);
