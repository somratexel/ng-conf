import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as utilComponents from './components';
import * as utilDirectives from './directives';
import * as utilPipes from './pipes';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ...utilComponents.components,
    ...utilDirectives.directives,
    ...utilPipes.pipes
  ],
  declarations: [
    ...utilComponents.components,
    ...utilDirectives.directives,
    ...utilPipes.pipes
  ]
})
export class UtilityModule { }
