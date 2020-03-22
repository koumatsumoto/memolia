import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTermComponent } from './components/page/add-term/add-term.component';
import { ViewTermComponent } from './components/page/view-term/view-term.component';
import { ViewTermsComponent } from './components/page/view-terms/view-terms.component';

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
