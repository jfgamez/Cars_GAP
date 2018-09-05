import { Pipe, PipeTransform } from "@angular/core";

/**
 * Pipe for sort a data
 * @param  {"sort"}} {name
 */
@Pipe({
    name: "sort"
})
export class SortPipe implements PipeTransform {
  transform(data: any[], item: string): any[] {
    if (data) {
      data.sort((a: any, b: any) => {
        if (a[item] < b[item]) {
          return -1;
        } else if (a[item] > b[item]) {
          return 1;
        } else {
          return 0;
        }
      });
    }  
    return data;
  }
}