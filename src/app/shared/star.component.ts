import { Component, OnChanges,Input,EventEmitter, Output  } from "@angular/core";


@Component({
//嵌套在product-list.component的pm-star中
selector: 'pm-star',
templateUrl:'./star.component.html',
styleUrls:['./star.component.css']

})

export class StarComponent implements OnChanges{
    starWidth:number;
    @Input () rating: number;//receive rating from container-product-list.component
   //onClick()事件触发后，ratingClicked emit 的value即下面的string message作为$event
   //output的ratingClicked必须和html绑定的属性同名 
   @Output () ratingClicked:EventEmitter<string>=new EventEmitter<string>();
//using output and event to transfer data back to container;

ngOnChanges():void{
    this.starWidth=this.rating*75/5;
}


onClick():void{
//Emits an event containing a given value
this.ratingClicked.emit(`The Rating ${this.rating} Was Clicked`);

}
}