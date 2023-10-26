import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ThongTinChuyenBay } from 'src/app/models/thongtinchuyenbay.model';
import { ThongTinChuyenBayAPIService } from 'src/app/services/thongtinchuyenbayAPI.service';

@Component({
  templateUrl: './chitietdatve.component.html',
  styleUrls: ['./chitietdatve.component.css']
})
export class ChiTietDatVeComponent implements OnInit {
  thongtinchuyenbays:ThongTinChuyenBay[]
  thongtinchuyenbayForm: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private activatedRoute : ActivatedRoute,
    private thongtinchuyenbayAPIService:ThongTinChuyenBayAPIService,
) { }
    ngOnInit(){
      this.activatedRoute.paramMap.subscribe(params => {
        var maCb = params.get('maCb').toString();
        
        this.thongtinchuyenbayAPIService.find(maCb).then(
            res => {
              this.thongtinchuyenbays = res as ThongTinChuyenBay[]; 
              console.log(this.thongtinchuyenbays);
            },
            err => {
                console.log(err);
            }
        );
    });
 
    }
}