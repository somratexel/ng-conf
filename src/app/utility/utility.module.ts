import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ModalComponent } from './components/modal/modal.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { HasErrorDirective } from './directives/has-error/has-error.directive';
import { TextBoldDirective } from './directives/text-bold/text-bold.directive';
import { TextHighlightDirective } from './directives/text-highlight/text-highlight.directive';
import { NlToBrPipe } from './pipes/nl-to-br/nl-to-br.pipe';
import { EllipsisPipe } from './pipes/ellipsis/ellipsis.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';

@NgModule({
  declarations: [
    AlertComponent,
    DropdownComponent,
    ModalComponent,
    DatepickerComponent,
    HasErrorDirective,
    TextBoldDirective,
    TextHighlightDirective,
    NlToBrPipe,
    EllipsisPipe,
    FilterPipe,
    SortPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    DropdownComponent,
    ModalComponent,
    DatepickerComponent,
    HasErrorDirective,
    TextBoldDirective,
    TextHighlightDirective,
    NlToBrPipe,
    EllipsisPipe,
    FilterPipe,
    SortPipe
  ]
})
export class UtilityModule { }
