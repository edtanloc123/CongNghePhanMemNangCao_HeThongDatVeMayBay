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
  maSbayDi:any;
  maSbayDen:any;
  ngayCatCanh:any;
  constructor(
    private thongtinchuyenbayAPIService:ThongTinChuyenBayAPIService,
    private sanbayAPIService:SanBayAPIService,
    private formBuilder: FormBuilder,
    private router : Router
  ){}
  thongtinchuyenbays:ThongTinChuyenBay[];
  sanbays:SanBay[];
  ngOnInit(){
    
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
     this.search = this.formBuilder.group({
      maSbayDi: '',
      maSbayDen: '',
      ngayCatCanh:''
    });
  }
  search1(){
    var account:ThongTinChuyenBay =this.search.value as ThongTinChuyenBay;
    console.log(account);
    var ngayCatCanh=account.ngayCatCanh.toString();
    var maSbayDi=account.maSbayDi.toString();
    var maSbayDen=account.maSbayDen.toString();
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