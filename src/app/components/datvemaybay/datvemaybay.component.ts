import { Component, OnInit } from '@angular/core';
import { SanBay } from 'src/app/models/sanbay.model';
import { ThongTinChuyenBay } from 'src/app/models/thongtinchuyenbay.model';
import { SanBayAPIService } from 'src/app/services/sanbayAPI.service';
import { ThongTinChuyenBayAPIService } from 'src/app/services/thongtinchuyenbayAPI.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({

  templateUrl: './datvemaybay.component.html',
  styleUrls: ['./datvemaybay.component.css']
})
export class DatVeMayBayComponent implements OnInit {
  search: FormGroup;
  maSbayDi:any;
  maSbayDen:any;
  ngayCatCanh:any;
  constructor(
    private thongtinchuyenbayAPIService:ThongTinChuyenBayAPIService,
    private sanbayAPIService:SanBayAPIService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private formBuilder: FormBuilder

  ){}
  thongtinchuyenbays:ThongTinChuyenBay[];
  sanbay:SanBay;
    todayDate1: Date = new Date();
    todayDate2: Date = new Date();
    todayDate3: Date = new Date();
    todayDate4: Date = new Date();
    todayDate5: Date = new Date();
    todayDate6: Date = new Date();
    todayDate7: Date = new Date();
    value: number;
    date1: number;
    date2: number;
    date3: number;
    date4: number;
    date5: number;
    date6: number;
    date7: number;
    query: string;
    string: string = "Thứ Tư, Tháng 9 6, 2023";
    
    
  
    dateSelected: Date;
    // paymentOptions: any[] = [
    //     { name: 'Option 1', value: 1 },
    //     { name: 'Option 2', value: 2 },
    //     { name: 'Option 3', value: 3 }
    // ];
    ngOnInit() {
     
      this.thongtinchuyenbayAPIService.findAll().then(
        res => {
            this.thongtinchuyenbays = res as ThongTinChuyenBay[]; 
           console.log(this.thongtinchuyenbays);
           
        },
        err => {
            console.log(err);
        }
       )
     
   
      this.date1 = this.todayDate1.setDate(this.todayDate1.getDate() + 0);
      this.date2 = this.todayDate2.setDate(this.todayDate2.getDate() + 1);
      this.date3 = this.todayDate3.setDate(this.todayDate3.getDate() + 2);
      this.date4 = this.todayDate4.setDate(this.todayDate4.getDate() + 3);
      this.date5 = this.todayDate5.setDate(this.todayDate5.getDate() + 4);
      this.date6 = this.todayDate6.setDate(this.todayDate6.getDate() + 5);
      this.date7 = this.todayDate7.setDate(this.todayDate7.getDate() + 6);
  
      console.log(new Date(this.string));
  
      this.dateSelected = this.todayDate1;
  
      this.search=this.formBuilder.group({
        maSbayDi:'',
        maSbayDen:'',
        ngayCatCanh:''
    });
 
   
   
}
search1(){
  var account:ThongTinChuyenBay =this.search.value as ThongTinChuyenBay;
    console.log(account);
    var ngayCatCanh=account.ngayCatCanh.toString();
  this.thongtinchuyenbayAPIService.search(account.maSbayDi,account.maSbayDen,ngayCatCanh).then(
    res=>{
      this.thongtinchuyenbays = res as ThongTinChuyenBay[]; 
    },err=>{
        console.log(err);
    }
)
  // this.thongtinchuyenbayAPIService.search(maSbayDi,maSbayDen,ngayCatCanh).then(
  //   res=>{
  //     this.thongtinchuyenbays=res as ThongTinChuyenBay[];
  //     console.log(this.thongtinchuyenbays);
      
  //   },
  //   err => {
  //       console.log(err);
  //   }
  // )
}

}