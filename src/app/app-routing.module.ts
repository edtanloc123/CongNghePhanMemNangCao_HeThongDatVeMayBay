import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrangChuComponent } from './components/trangchu/trangchu.component';
import { ThongTinHanhChinhComponent } from './components/thongtinhanhchinh/thongtinhanhchinh.component';
import { DangNhapComponent } from './components/dangnhap/dangnhap.component';
import { DangKyComponent } from './components/dangky/dangky.component';
import { LienHeComponent } from './components/lienhe/lienhe.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
