import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'MyDiscount'
})

export class DiscountPipe implements PipeTransform{
transform(value: number, percentage: number){
    value= value-percentage;
    return value;
}
}