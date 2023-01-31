import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppsModule } from 'src/apps/apps.module';
import { AboutComponent } from 'src/layout/about/about.component';
import { ageRangeValidators } from 'src/layout/reactive-form/form';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppsModule,
  ],
  providers: [ageRangeValidators],
  bootstrap: [AppComponent],
})
export class AppModule {}
