import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormComponent } from './template-driven-form.component';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatRadioModule,
  MatCheckboxModule,
  MatButtonModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TemplateDrivenFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  exports: [
    TemplateDrivenFormComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class TemplateDrivenFormModule { }
