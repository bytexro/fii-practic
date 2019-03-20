import { Component } from '@angular/core';
import { MissionService } from './component-interaction.service';

@Component({
  selector: 'app-mission-control',
  template: `
    <h2>Mission Control</h2>
    <button (click)="announce()">Announce mission</button>
  `,
  providers: [MissionService]
})
export class MissionControlComponent {

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        // it happened
      });
  }

  announce() {
    this.missionService.announceMission('FRIDAY');
  }
}
