import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
 
  ],
  imports: [
    //在特性模块中，应该使用RouterModule.forChild()
    RouterModule.forChild([
      {path:'products',component:ProductListComponent},
      {path:'products/:id',
      canActivate:[ProductDetailGuard],
      component:ProductDetailComponent},
    ]),
    SharedModule

  ]
})
export class ProductModule { }
