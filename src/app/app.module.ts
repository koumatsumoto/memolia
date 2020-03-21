import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddTermComponent } from './page/add-term/add-term.component';
import { ViewTermsComponent } from './page/view-terms/view-terms.component';
import { ViewTermComponent } from './page/view-term/view-term.component';

@NgModule({
  declarations: [AppComponent, AddTermComponent, ViewTermsComponent, ViewTermComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
