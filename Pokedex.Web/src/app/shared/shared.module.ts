/*page*/
import { SideMenuComponent } from './component/side-menu/side-menu.component';

/*module*/
import { MaterialModule } from './material-module/material-module.module';

/*package*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
  ],
  exports: [
    MaterialModule,
    SideMenuComponent,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
  ]
})

export class SharedModule { }
