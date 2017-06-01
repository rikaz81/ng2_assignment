import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    filteredItems: any = [];
    transform(items: any[], filter: string, brandFilter: string, conditionFilter: string): any {


        if (!items || (!filter && !brandFilter && !conditionFilter)) {
            return items;
        }
        if (filter) {
            console.log('Apply 1st filter');
            items = items.filter(item => item.vechicleModel.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
            console.log(items.length);
        }

        if (items.length > 0 && brandFilter) {
            console.log('Apply 2nd filter');
            items = items.filter(item => item.brand.toLowerCase().indexOf(brandFilter.toLowerCase()) !== -1);
        }


        if (items.length > 0 && conditionFilter) {
            console.log('Apply 3rd filter');
            items = items.filter(item => item.condition.toLowerCase().indexOf(conditionFilter.toLowerCase()) !== -1);
        }
        return items;

        // To search in values of every variable of your object(item)
        // return items.filter(item => JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }

}