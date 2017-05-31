import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(items: any[], filter: string): any {
        console.log('inside text filter');
        console.log('Items', items);
        console.log('Filters', filter);
        if (!items || !filter) {
            return items;
        }
        // To search values only of "name" variable of your object(item)



        items = items.filter(item => item.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
        console.log(items.length);
        return items;

        // To search in values of every variable of your object(item)
        // return items.filter(item => JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }

}