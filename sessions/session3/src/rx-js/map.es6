const source = from([
  { name: 'Joe', age: 30 },
  { name: 'Frank', age: 20 },
  { name: 'Ryan', age: 50 }
]);

const example = source.pipe(map(({ name }) => name));

const subscribe = example.subscribe(val => console.log(val));
//output: "Joe","Frank","Ryan"