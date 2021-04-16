import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  first = 0;
  val;
  rows = 10;
  columns: number[];
  peoples;
  isPeopleSelected = false;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("assets/people.json").subscribe(data => {
      this.peoples = data;
      console.log(data);
    });
  }

  asc() {
    this.peoples.people.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }

  dsc() {
    console.log("dsc");
    this.peoples.people.sort((a, b) => (a.name > b.name) ? -1 : 1)
  }

  fetchPeople(name) {
    this.isPeopleSelected = true;
    console.log("name" + name);
    this.peoples.people.forEach(element => {
      if (element.name === name) {
        element.clicked = true;
        this.val = element;
      } else {
        element.clicked = false;
      }

    });
    console.log(this.val);
  }

}
