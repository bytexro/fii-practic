import {
  Input,
  OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy,
  Component,
  SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-peek-a-boo',
  template: `<p>Name: {{name}}, a: {{getAge()}}, w: {{ 20 + 20}}
      <app-inner-comp [property]="value"> </app-inner-comp>
    </p>
    <div *ngFor="let msg of hookLog">{{msg}}</div>
  `,
  styles: ['p {background: LightYellow; padding: 8px}']
})

export class LifeCycleHooksComponent implements
  OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {
  @Input() name: string;

  protected hookLog: string[];

  constructor() {
    const is = this.name ? 'is' : 'is not';

    this.logIt(`name ${is} known at construction`);
  }

  // only called for/if there is an @input variable set by parent.
  ngOnChanges(changes: SimpleChanges) {
    this.logIt(`OnChanges: ${Object.keys(changes)}`);
  }

  // called once after first ngOnChanges
  ngOnInit() {
    this.logIt(`OnInit`);
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() { this.logIt(`DoCheck`); }

  ngAfterContentInit() { this.logIt(`AfterContentInit`); }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() { this.logIt(`AfterContentChecked`); }

  ngAfterViewInit() { this.logIt(`AfterViewInit`); }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() { this.logIt(`AfterViewChecked`); }

  ngOnDestroy() { this.logIt(`OnDestroy`); }

  protected logIt(msg: string): void {
    this.hookLog.push(msg);
  }
}
