import { HasErrorDirective } from './has-error/has-error.directive';
import { TextBoldDirective } from './text-bold/text-bold.directive';
import { TextHighlightDirective } from './text-highlight/text-highlight.directive';

export const directives: any[] = [
  HasErrorDirective,
  TextBoldDirective,
  TextHighlightDirective
];

export * from './has-error/has-error.directive';
export * from './text-bold/text-bold.directive';
export * from './text-highlight/text-highlight.directive';
