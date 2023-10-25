import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SanBay } from 'src/app/models/sanbay.model';
import { ThongTinChuyenBay } from 'src/app/models/thongtinchuyenbay.model';
import { SanBayAPIService } from 'src/app/services/sanbayAPI.service';
import { ThongTinChuyenBayAPIService } from 'src/app/services/thongtinchuyenbayAPI.service';
@Component({
  templateUrl: './trangchu.component.html',

})
export class TrangChuComponent implements OnInit{
  search: FormGroup;
  constructor(
    private thongtinchuyenbayAPIService:ThongTinChuyenBayAPIService,
    private sanbayAPIService:SanBayAPIService,
    private formBuilder: FormBuilder,
    private router : Router
  ){}
  thongtinchuyenbays:ThongTinChuyenBay[];
  sanbays:SanBay[];
  ngOnInit(){
    this.search = this.formBuilder.group({
      masbaydi: '',
      masbayve: '',
      ngaycatcanh:''
    });
    this.thongtinchuyenbayAPIService.findAll().then(
      res => {
          this.thongtinchuyenbays = res as ThongTinChuyenBay[]; 
         console.log(this.thongtinchuyenbays);
      },
      err => {
          console.log(err);
      }
     );
    
     this.sanbayAPIService.findAll().then(
      res => {
          this.sanbays = res as SanBay[]; 
         console.log(this.sanbays);
      },
      err => {
          console.log(err);
      }
     );
  }
  search1(){
    var maSbayDi: string = this.search.value.maSbayDi;
    var maSbayDen: string = this.search.value.maSbayDen;
    var ngayCatCanh: any = this.search.value.ngayCatCanh;
    this.thongtinchuyenbayAPIService.search(maSbayDi,maSbayDen,ngayCatCanh).then(
      res=>{
        this.thongtinchuyenbays=res as ThongTinChuyenBay[];
        console.log(this.thongtinchuyenbays);
        this.router.navigate(['/datvemaybay'])
      },
      err => {
          console.log(err);
      }
    )
  }
}