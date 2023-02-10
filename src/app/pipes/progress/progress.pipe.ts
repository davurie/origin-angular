import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'progress' })
export class ProgressPipe implements PipeTransform {

  transform(value: number, totalvalue: number): string {
    if (value >= totalvalue) return '100%';

    return `${((value / totalvalue) * 100)}%`;
  }

}

