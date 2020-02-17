import { Component } from '@angular/core';

import { events } from '../events';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  events = events;

  share() {
    window.alert('The event has been shared!');
  }
}
