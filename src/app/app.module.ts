//Modules
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Pipe
import { ProductSearchPipe } from './product/productsearch.pipe';
import { MyUpperPipe } from './product/nameupperCase.pipe';
import { DiscountPipe } from './product/discount.pipe';

//Component
import { AppComponent } from './app.component';
import { BookComponent } from './book.compenent';
import { ProductComponent } from './product/product.component';
import { StarComponent } from './shared/star.component';
import { ProductService } from './product/product.service';


@NgModule({

    // all the module which require import here
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    // all the component and pipe require need to declare here
    declarations: [
        AppComponent,
        ProductComponent,
        BookComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearchPipe,
        StarComponent
    ],
    // only main component or first component need to declare here
    bootstrap: [
        AppComponent
    ],
    // all the services
    providers: [
        ProductService
    ]

})

export class AppModule{

}
