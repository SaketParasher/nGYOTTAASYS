import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from "@angular/core";

@Component({
  selector: "app-ipl",
  templateUrl: "./ipl.component.html",
  styleUrls: ["./ipl.component.css"]
})
export class IplComponent implements OnInit, OnChanges {
  @Input()
  teamToDisplay: object;

  constructor() {}

  ngOnInit() {
    console.log(this.teamToDisplay);
  }

  ngOnChanges() {
    console.log(this.teamToDisplay);
  }
}
