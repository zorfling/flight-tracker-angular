import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightListComponent } from './flight-list/flight-list.component';

const routes: Routes = [
  { path: 'flights', component: FlightListComponent },
  { path: '', redirectTo: '/flights', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
