import { Component, OnChanges, OnInit, OnDestroy,Input,Output,EventEmitter } from '@angular/core';

@Component({
    // Use component as attribute
    // selector:'[app-star]',

    //Use component as class
    // selector:'.app-star',

    //Use component as tag which is recomendate
     selector:'app-star',
    templateUrl:'./star.component.html',
    styles:['./star.compenent.css']
})

export class StarComponent implements OnChanges,OnInit,OnDestroy {

    starWidth: number;
    localstor: string;
    @Input() rating: number;

    @Output() ratingClicked :EventEmitter<string> = new EventEmitter<string>();
    constructor(){
        console.log('This is constructor');
    }

    
ngOnChanges(): void {   
    console.log('This is OnChanges Lifecycle hook');
    console.log(this.rating);
    this.starWidth = this.rating * 86/6
    this.localstor =  this.starWidth.toString();
    console.log( this.starWidth );
}
ngOnInit(): void {
    console.log('This is On init life cycle hook');
}
ngOnDestroy(): void {
    console.log('This is On Destroy life cycle hook');
}
onStar() : void {
    this.ratingClicked.emit(`the rating clicked is ${this.rating}`);
    localStorage.clear();
    localStorage.setItem('divWidth',this.localstor);
}
}
