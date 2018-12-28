import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { DemoMaterialComponent } from './demo-material.component';

@NgModule({
  declarations: [
    DemoMaterialComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    DemoMaterialComponent
  ]
})
export class DemoMaterialModule { }
