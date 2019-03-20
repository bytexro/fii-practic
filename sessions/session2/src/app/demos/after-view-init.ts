import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-child-view',
  template: `<div>
    <input [(ngModel)]="hero">
    <button (onClick)="startFight()"></button>`
})
export class ChildViewComponent {
  hero = 'Costel';
  @Output() fight = new EventEmitter<string>();

  startFight() {
    this.fight.emit(this.hero);
  }
}

@Component({
  selector: 'app-after-view',
  template: `<app-child-view (fight)="onStartFight($event)">
  <app-another-child-view #componentReference>
  </app-another-child-view>`
})
export class AfterViewComponent implements AfterViewChecked,
  AfterViewInit {
  protected prevHero = '';

  // Query for a VIEW child of type `ChildViewComponent`
  @ViewChild(ChildViewComponent) viewChild: ChildViewComponent;

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    this.doSomething();
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    if (this.prevHero === this.viewChild.hero) {
      // AfterViewChecked (no change)
    } else {
      // AfterViewChecked]
      this.prevHero = this.viewChild.hero;
      this.doSomething();
    }
  }

  doSomething() {
    // just do it
  }

  onStartFight(result: string) {
    // winner is
  }
}
