import { Component, OnInit } from "@angular/core";
import { DataService } from "../core/data.service";
import { TeamIndia } from "../models/india";
import { FriendlyError } from "../models/friendly-error";

@Component({
  selector: "app-india",
  templateUrl: "./india.component.html",
  styleUrls: ["./india.component.css"]
})
export class IndiaComponent implements OnInit {
  private teamIndia: TeamIndia;
  private errToDisplay: string;

  constructor(private dataSVC: DataService) {}

  ngOnInit() {
    this.dataSVC.getIndia().subscribe(
      (team: TeamIndia) => {
        this.teamIndia = team;
      },
      (err: FriendlyError) => {
        this.errToDisplay =
          err.friendlyMessage + " : Status : " + err.errorStatus;
      }
    );
  }
}
