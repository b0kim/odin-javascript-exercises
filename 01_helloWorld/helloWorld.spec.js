const {helloWorld, greet: helloName} = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });

  test('says "Hello, [name]"', function () {
    expect(helloName('Brandon')).toEqual('Hello, Brandon!');
  })
});
