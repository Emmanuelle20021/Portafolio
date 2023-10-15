import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'home'},
  {
    path: '',
    component: HomeComponent,
    children : [
      { path: 'home', loadChildren: () => import("src/app/modules/home/home-routing.module").then(m => m.HomeRoutingModule)},
    ]
  },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
