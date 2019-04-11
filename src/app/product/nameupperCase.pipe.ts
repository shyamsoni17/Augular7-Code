import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'MyUpper'
})
export class MyUpperPipe implements PipeTransform {

    transform(value: String, typeOff:string){
        if(typeOff=='uper')
        {
            value = value.toUpperCase();
        }
        if(typeOff=='lower')
        {
            value = value.toLowerCase();
        }
        
        return value;

    }
}