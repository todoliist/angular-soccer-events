import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import {RouterModule} from '@angular/router'
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [//那些属于本 NgModule 的组件、指令、管道
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //定义好路由模块后，还需要将其注册到主模块,下面第一个为主模块，一个为特性模块
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ]
    ),
    ProductModule
  ],
  bootstrap: [AppComponent]//应用的主视图，称为根组件。它是应用中所有其它视图的宿主。只有根模块才应该设置这个 bootstrap 属性
})
export class AppModule { }
