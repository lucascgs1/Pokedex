// module
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// package
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { NavMenuComponent } from './component/nav-menu/nav-menu.component';
//import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [  
    SideMenuComponent,
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    //SweetAlert2Module.forRoot(),
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SideMenuComponent, 
    NavMenuComponent,
    //SweetAlert2Module,
  ]
})
export class SharedModule { }
