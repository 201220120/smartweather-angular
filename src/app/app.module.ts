import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './components/features/features.component';
import { AboutComponent } from './components/about/about.component';
//import { AngularFontAwesomeModule } from '@angular/font-awesome';
import {app_routing} from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { DownloadComponent } from './components/download/download.component';
@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    AboutComponent,
    HomeComponent,
    TeamComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  //  AngularFontAwesomeModule,
    //NgbModule,
    //NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
