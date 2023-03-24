import { Injectable, PipeTransform } from '@nestjs/common';


export interface FilterParams {
  [key: string]: {
    condition: string;
    value: any
  }
}


@Injectable()
export class ParseFilterPipe implements PipeTransform<Record<string, string>, FilterParams> {
  transform(value) {
    const filters: Record<string, any> = {};
    Object.keys(value).forEach(key => {
      if (key.startsWith('filter-')) {
        const [condition, objKey] = key.replace('filter-', '').split('-');
        filters[objKey] = { condition: condition, value: value[key] };
      }
    });

    return filters;
  }
}
