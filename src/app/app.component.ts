import { Component, OnInit } from '@angular/core';
import { employeeData } from './datasource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'arize';

  public data!: object[];

  ngOnInit(): void {
    this.data = employeeData;
  }
  administrateEvent(data: number): void {
    alert('Patient Id is ' + data);
  }
}
