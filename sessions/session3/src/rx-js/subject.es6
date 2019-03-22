const subject = new Rx.Subject();

subject.subscribe(v => console.log('observerA: ' + v));
subject.subscribe(v => console.log('observerB: ' + v));

subject.next(1);
/* Output:
 observerA: 1
 observerB: 1
 */
subject.next(2);
/* Output:
 observerA: 2
 observerB: 2
 */