import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

// Import components from pages
import { HomeComponent } from './pages/home/home.component';
 
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent } //redirect whenever path is not existing 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}