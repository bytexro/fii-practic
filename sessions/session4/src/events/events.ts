<button (click)="onSave($event)">Save</button>

<button on-click="onSave($event)">on-click Save</button>

const element = document.querySelector('#id');
element.addEventListener('click', console.log('element clicked'));