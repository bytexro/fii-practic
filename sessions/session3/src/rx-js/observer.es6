let count = new Observable(
  (observer) => {
    const couter = 0;

    const interval = setInterval(() => {
      observer.next(++counter);

      if (counter > 9) {
        clearInterval(interval);
        observer.complete('Am terminat de numarat');
      }

      if (couter === 4) {
        observer.error('Vreau 5-ul');
      }
    }, 1000);
  }
);


count.subscribe(
  value => console.log('Numbewr: ' + value),
  error => console.log('Error: ' + error),
  complete => console.log(complete)
);

// Se va afisa din secunda in secunda
// Number: 1
// Number: 2
// Number: 3
// Error: Vreau 5-ul
