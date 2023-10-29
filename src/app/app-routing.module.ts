import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrangChuComponent } from './components/trangchu/trangchu.component';
import { ThongTinHanhChinhComponent } from './components/thongtinhanhchinh/thongtinhanhchinh.component';
import { DangNhapComponent } from './components/dangnhap/dangnhap.component';
import { DangKyComponent } from './components/dangky/dangky.component';
import { LienHeComponent } from './components/lienhe/lienhe.component';
import { DatVeMayBayComponent } from './components/datvemaybay/datvemaybay.component';
import { ChiTietDatVeComponent } from './components/chitietdatve/chitietdatve.component';

const routes: Routes = [
  {
    path: '',
    component: TrangChuComponent,
   
  },
  {
    path: 'trangchu',
    component: TrangChuComponent,
   
  },
  {
    path:'thongtinhanhchinh',
    component: ThongTinHanhChinhComponent,
  },
  {
    path:'dangnhap',
    component: DangNhapComponent,
  },
  {
    path:'dangky',
    component: DangKyComponent,
  },
  {
    path:'lienhe',
    component: LienHeComponent,
  },
  {
    path:'datvemaybay',
    component: DatVeMayBayComponent,
  },
  {
    path:'chitietdatve',
    component: ChiTietDatVeComponent,
  },
  {
    path: 'datvemaybay/:maSbayDi/:maSbayDen/ngayCatCanh', component: ChiTietDatVeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
