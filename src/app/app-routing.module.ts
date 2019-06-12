import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { HelpComponent } from "./help/help.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "about/:description", component: AboutComponent },
  { path: "help", component: HelpComponent },
  { path: "", component: HomeComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
