import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangChuComponent } from './components/trangchu/trangchu.component';
import { ThongTinHanhChinhComponent } from './components/thongtinhanhchinh/thongtinhanhchinh.component';
import { DangNhapComponent } from './components/dangnhap/dangnhap.component';
import { DangKyComponent } from './components/dangky/dangky.component';
import { LienHeComponent } from './components/lienhe/lienhe.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent,
    ThongTinHanhChinhComponent,
    DangNhapComponent,
    DangKyComponent,
    LienHeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
