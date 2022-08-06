import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BustsComponent } from './busts/busts.component';
import { BustsListComponent } from './busts/busts-list/busts-list.component';
import { BustDetailsComponent } from './busts/bust-details/bust-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { MaterialModule } from '@fantasy-football-busts/material';
import { CoreDataModule } from '@fantasy-football-busts/core-data';
import { EnvironmentModule } from '@fantasy-football-busts/environment';
import { HttpClientModule } from '@angular/common/http';
import { UiLoginModule } from '@fantasy-football-busts/ui-login';
import { RoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,

    BustsComponent,
    BustsListComponent,
    BustDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiLoginModule,
    RoutingModule,
    CoreDataModule,
    EnvironmentModule.withEnvironment(environment),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
