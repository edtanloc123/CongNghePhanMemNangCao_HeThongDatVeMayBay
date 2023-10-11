import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrangChuComponent } from './components/trangchu/trangchu.component';

const routes: Routes = [
  {
    path: '',
    component: TrangChuComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
