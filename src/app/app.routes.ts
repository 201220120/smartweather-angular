import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeaturesComponent } from './components/features/features.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { DownloadComponent } from './components/download/download.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'features', component: FeaturesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'team', component: TeamComponent },
    { path: 'download', component: DownloadComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' },
];

export const app_routing = RouterModule.forRoot(routes);
