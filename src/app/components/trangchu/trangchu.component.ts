import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SanBay } from 'src/app/models/sanbay.model';
import { ThongTinChuyenBay } from 'src/app/models/thongtinchuyenbay.model';
import { SanBayAPIService } from 'src/app/services/sanbayAPI.service';
import { ThongTinChuyenBayAPIService } from 'src/app/services/thongtinchuyenbayAPI.service';
@Component({
  templateUrl: './trangchu.component.html',

})
export class TrangChuComponent implements OnInit{
  thongtinchuyenbayAPI:FormGroup;
  constructor(
    private thongtinchuyenbayAPIService:ThongTinChuyenBayAPIService,
    private sanbayAPIService:SanBayAPIService
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
  }
}