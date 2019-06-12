import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  iplTeams: object = {
    RCB: { p1: "kohli", p2: "ABD", team: "RCB" },
    CSK: { p1: "MSD", p2: "Bhajji", team: "CSK" },
    KKR: { p1: "Russel", p2: "Kartik", team: "KKR" },
    SRH: { p1: "Warner", p2: "Bhuvi", team: "SRH" }
  };

  teamToInput: string[] = this.iplTeams["RCB"];

  setInput(teamToInput: string) {
    this.teamToInput = this.iplTeams[teamToInput];
  }
}
