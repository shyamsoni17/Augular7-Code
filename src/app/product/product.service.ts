import { Injectable } from '@angular/core';
import { IProduct } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ProductService{

    productUrl: string = "https://ngproductsparam.herokuapp.com/api/getproductdetails";

    constructor(private _http: HttpClient){}

    getProducts():Observable<IProduct[]> {
    //   return this._http.get<IProduct[]>(`${this.productUrl}`);     
    return this._http.get<IProduct[]>(`${this.productUrl}`);
// return [   
//         {
//             '_id':'5a05dacc734d1d68d42d31f3',
//             'productId':1,
//             'productName':'Leaf Rake',
//             'productCode':'GDN-0011',
//             'releaseDate':'March 19, 2016',
//             'description':'Leaf rake with 48-inch wooden handle.',
//             'price':19.95,
//             'starRating':3.5,
//             'imageUrl':'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
//         }
//         ]

        }
}