const subject = new Rx.BehaviorSubject(0); // 0 is the initial value

subject.subscribe({next: (v) => console.log('observerA: ' + v)});
/* Output:
 observerA: 0
 */
subject.next(1);
/* Output:
 observerA: 1
 */
subject.next(2);
/* Output:
 observerA: 2
 */
subject.subscribe({next: (v) => console.log('observerB: ' + v)});
/* Output:
 observerB: 2
 */
subject.next(3);
/* Output:
 observerA: 3
 observerB: 3
 */