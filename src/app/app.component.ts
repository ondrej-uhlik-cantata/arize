import { Component, OnInit } from '@angular/core';
import { employeeData,events } from './datasource';
import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs';
import {Event} from './Event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'arize';

  public data!:Observable<object>;


   public events! :Observable<Event[]>;


  ngOnInit(): void {
    this.data = of(employeeData);
    this.events = of(events);
  }
  administrateEvent(data: number): void {
    alert('Patient Id is ' + data);
  }
}
