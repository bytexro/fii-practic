class Person {
  constructor(name) {
    this.name = name;
  }

  hello() {
    return 'Hello, I am ' + this.name + '.';
  }
}

const Adam = new Person('Adam');
Adam.hello();