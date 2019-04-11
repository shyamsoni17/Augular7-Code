import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product.model';


@Pipe({
    name:'Search'
})
export class ProductSearchPipe implements PipeTransform{
    transform(value: IProduct[], UserText: string): IProduct[] {
        UserText= UserText ? UserText.toLowerCase():null;
        return UserText ? value.filter((product)=>
        (product.productName.toLowerCase().indexOf(UserText)!==-1) ||
        product.productCode.toLowerCase().indexOf(UserText)!==-1):value;
       
    }
}