import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';

import { PrimengModule } from 'src/app/sharedmodule/primeng/primeng/primeng.module';
import { HomepageComponent } from './homepage.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    PrimengModule,
    FormsModule
  ]
  
})
export class HomepageModule { }
