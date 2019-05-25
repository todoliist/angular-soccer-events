import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle:string='Product List';
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=false;
    errorMessage: string;
    _listFilter:string;
    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter=value;
        this.filteredProducts=this._listFilter?this.performFilter(this._listFilter):this.products;
    }

filteredProducts:IProduct[]=[];
products: IProduct[]=[];
toggleImage():void{
    this.showImage=!this.showImage;
}

constructor(private productService:ProductService){
}

ngOnInit(): void{
   this.productService.getProducts().subscribe(
   //next: For each item being emitted（products，类型IProduct[]） by the observable perform this function
    products=>{this.products=products,
              this.filteredProducts=this.products
            } ,
    error=>this.errorMessage=<any>error
   );
}

//message:string 是容器中star.comp的Output () output的ratingClicked emit出的message？
onRatingClicked(message:string): void{
    this.pageTitle='Product With '+message;
}

performFilter(filterBy:string):IProduct[]{
filterBy=filterBy.toLocaleLowerCase();
return this.products.filter(
    (product:IProduct)=>
    product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
//如果product对象的productName中能找到filterBy这个string，就return products数组中所有满足条件的product对象
}
}