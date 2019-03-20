console.log(message); // Output: undefined
// when in fact we would expect to throw a ReferenceError

var message = 'Hello World';

console.log(message); // 'Hello World'

// the interpreter will view the above as:

var message;  // undefined -> hoisted to the top of the scope.

console.log(message);

message = 'Hello World';

console.log(message); // 'Hello World'