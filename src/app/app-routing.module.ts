import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTermComponent } from './page/add-term/add-term.component';
import { ViewTermsComponent } from './page/view-terms/view-terms.component';
import { ViewTermComponent } from './page/view-term/view-term.component';

const routes: Routes = [
  {
    path: 'add-term',
    component: AddTermComponent,
  },
  {
    path: 'terms',
    component: ViewTermsComponent,
  },
  {
    path: 'terms/:name',
    component: ViewTermComponent,
  },
  {
    path: '',
    component: ViewTermsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
