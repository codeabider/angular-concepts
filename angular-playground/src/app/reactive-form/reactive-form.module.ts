import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form.component';
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
  declarations: [ReactiveFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  exports: [
    ReactiveFormComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class ReactiveFormModule { }
