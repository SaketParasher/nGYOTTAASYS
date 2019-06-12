import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styles: []
})
export class AboutComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  pageName: string;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.pageName = params.get("description");
    });
  }
}
