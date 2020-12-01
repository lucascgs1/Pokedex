//page
import { SideMenuComponent } from './component/side-menu/side-menu.component';

//module
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { MaterialModule } from './material-module/material-module.module';

//package
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BootstrapModule,
    RouterModule,
  ],
  exports: [
    BootstrapModule,
    MaterialModule,
    SideMenuComponent,
  ]
})

export class SharedModule { }
