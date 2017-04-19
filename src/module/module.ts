import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { RootComponent } from "components/root/root";
import { ROUTES } from "module/routes";
import { NavigationComponent } from "components/navigation/navigation";
import { HomeComponent } from "components/sites/home/home";

@NgModule({
  declarations: [
    //Root
    RootComponent,
    NavigationComponent,
    //Sites
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
