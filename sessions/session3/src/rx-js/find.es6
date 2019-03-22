const array = [1, 2, 3, 4];

const source = Rx.Observable.fromArray(array)
    .find(x => x === 3);

const subscription = source.subscribe((x) => console.log('Next: ' + x));

// => Next: 3