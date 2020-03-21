import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddTermComponent } from './page/add-term/add-term.component';
import { ViewTermsComponent } from './page/view-terms/view-terms.component';
import { ViewTermComponent } from './page/view-term/view-term.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'terms',
    component: ViewTermsComponent,
  },
  {
    path: 'terms/add',
    component: AddTermComponent,
  },
  {
    path: 'terms/:name',
    component: ViewTermComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
