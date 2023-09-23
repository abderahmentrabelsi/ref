import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponentComponent } from './user/userList/user-component.component';
//import userform component
import { UserFormComponent } from './user/userForm/user-form/user-form.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  { path: 'userss', component: UserComponentComponent },
  { path: 'adduser', component: UserFormComponent },
];




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
