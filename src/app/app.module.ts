import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from "primeng/api";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangChuComponent } from './components/trangchu/trangchu.component';
import { ThongTinHanhChinhComponent } from './components/thongtinhanhchinh/thongtinhanhchinh.component';
import { DangNhapComponent } from './components/dangnhap/dangnhap.component';
import { DangKyComponent } from './components/dangky/dangky.component';
import { LienHeComponent } from './components/lienhe/lienhe.component';
import { DatVeMayBayComponent } from './components/datvemaybay/datvemaybay.component';
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { ToastModule } from "primeng/toast";
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BaseUrlService } from './services/baseUrl.service';
import { ThongTinChuyenBayAPIService } from './services/thongtinchuyenbayAPI.service';
import { SanBayAPIService } from './services/sanbayAPI.service';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent,
    ThongTinHanhChinhComponent,
    DangNhapComponent,
    DangKyComponent,
    LienHeComponent,
    DatVeMayBayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    RadioButtonModule,
    SelectButtonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    ConfirmationService,
    MessageService,
    BaseUrlService,
    ThongTinChuyenBayAPIService,
    SanBayAPIService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
