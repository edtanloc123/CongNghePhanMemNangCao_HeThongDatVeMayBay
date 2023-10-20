import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ThongTinChuyenBay } from 'src/app/models/thongtinchuyenbay.model';
import { ThongTinChuyenBayAPIService } from 'src/app/services/thongtinchuyenbayAPI.service';
@Component({
  templateUrl: './trangchu.component.html',

})
export class TrangChuComponent implements OnInit{
  thongtinchuyenbayAPI:FormGroup;
  constructor(
    private thongtinchuyenbayAPIService:ThongTinChuyenBayAPIService
  ){}
  thongtinchuyenbays:ThongTinChuyenBay[];
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
  }
}