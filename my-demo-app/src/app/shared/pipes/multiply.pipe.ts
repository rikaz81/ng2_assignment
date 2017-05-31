import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'multiply',
    pure: false
})

export class MultiplyPipe implements PipeTransform {
    transform(value: any, args?: any, args2?: any) {
        return value * args2;
    }


}

