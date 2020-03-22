import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTermComponent } from './components/page/add-term/add-term.component';
import { ViewTermComponent } from './components/page/view-term/view-term.component';
import { ViewTermsComponent } from './components/page/view-terms/view-terms.component';

@NgModule({
  declarations: [AppComponent, AddTermComponent, ViewTermsComponent, ViewTermComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
