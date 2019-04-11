import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';
@Component({
    selector: 'app-prod',
    templateUrl: './product.component.html',
    //styles:['thead{color:red}','h4{color:blue}']
    styleUrls:['./product.component.css'],
    styles:['.Online{color:red}']
   // ,providers:[ ProductService ]
})

export class ProductComponent implements OnInit{

Filter: String ='Filter Text';
NumberOfFilter: String = 'Number of filtered product => ';
// User: any[] = ['John','Mark','Peter','Frank','Marry'];
UserInput: String ;
ShowImage: boolean= false;
ServerStatus:String ='Offline';
ImageWidth: Number = 75;
Title: String = "---Product List---";
statDivWidth: String;

constructor(private _ProductService: ProductService ){
   this.ServerStatus = Math.random() >0.5?'Online':'Offline';
   this.statDivWidth = localStorage.getItem('divWidth');
}

Product: IProduct[]
ngOnInit():void {
    //this.Product =this._ProductService.getProducts();
    this._ProductService.getProducts()
    .subscribe((data) => this.Product = data);
  }
toggleImage(): void {
this.ShowImage = !this.ShowImage;
}
onDataRecieve(message: string)
{
this.Title = "~~~Product List~~~~" + message
}
}
