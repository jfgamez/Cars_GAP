import { Pipe, PipeTransform } from '@angular/core';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter';

/**
 * Filter the values from an object and return values
 */
@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.map( data => {
        return data.filter( car => {
            return car.brand.toLowerCase().includes(searchText);
        });
    });
    }
}
