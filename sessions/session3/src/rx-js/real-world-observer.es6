// Vanilla JS
const button = document.querySelector('button');
button.addEventListener('click', () => console.log('Clicked!'));

// RxJS
const button = document.querySelector('button');
Rx.Observable
  .fromEvent(button, 'click')
  .subscribe(() => console.log('Clicked!'));