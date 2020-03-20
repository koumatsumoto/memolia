import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddTermComponent } from './page/add-term/add-term.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'terms/add',
    component: AddTermComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
