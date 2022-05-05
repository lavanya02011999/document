import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';


import { UpdateComponent } from './pages/update/update.component';
import { DetailsComponent } from './pages/details/details.component';
import { CreateComponent } from './pages/create/create.component';


const routes: Routes = [
  {path:'',component:HomeComponent,},
  
  {path:'list',component:ListComponent},
  {path:'', redirectTo: 'documents', pathMatch: 'full'},
  {path:'create',component:CreateComponent},
  
  {path:'update/:id',component:UpdateComponent},
  
  {path:'details', component:DetailsComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
