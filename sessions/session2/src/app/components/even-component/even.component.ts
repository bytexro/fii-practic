import { Component } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent {
  public numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
