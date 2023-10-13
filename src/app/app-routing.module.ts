import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrangChuComponent } from './components/trangchu/trangchu.component';
import { ThongTinHanhChinhComponent } from './components/thongtinhanhchinh/thongtinhanhchinh.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
