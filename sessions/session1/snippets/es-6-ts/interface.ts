interface IPerson {
  FirstName: string,
  LastName: string,
  sayHi: () => string
}

const customer: IPerson = {
  FirstName: 'Tom',
  LastName: 'Hanks',
  sayHi: () => 'Hi',
};