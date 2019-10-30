import { NlToBrPipe } from './nl-to-br/nl-to-br.pipe';
import { EllipsisPipe } from './ellipsis/ellipsis.pipe';
import { FilterPipe } from './filter/filter.pipe';
import { SortPipe } from './sort/sort.pipe';

export const pipes: any[] = [
  NlToBrPipe,
  EllipsisPipe,
  FilterPipe,
  SortPipe
];

export * from './nl-to-br/nl-to-br.pipe';
export * from './ellipsis/ellipsis.pipe';
export * from './filter/filter.pipe';
export * from './sort/sort.pipe';
