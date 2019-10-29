import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TypeaheadModule,
  PaginationModule,
  TooltipModule,
} from 'ngx-bootstrap';
import { UtilityModule } from '../utility/utility.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UtilityModule,
    TypeaheadModule.forRoot(),
    PaginationModule.forRoot(),
    TooltipModule.forRoot()
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    UtilityModule,
    TypeaheadModule,
    PaginationModule,
    TooltipModule,
  ]
})
export class SharedModule { }
