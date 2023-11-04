import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HanhKhachAPI } from 'src/app/models/hanhkhach.model';
import { ThongTinChuyenBay } from 'src/app/models/thongtinchuyenbay.model';
import { VeAPI } from 'src/app/models/ve.model';
import { HanhKhachAPIService } from 'src/app/services/hanhkhachAPI.service';
import { ThongTinChuyenBayAPIService } from 'src/app/services/thongtinchuyenbayAPI.service';
import { VeAPIService } from 'src/app/services/ve.service';

@Component({
  templateUrl: './ve.component.html',
  styleUrls: ['./ve.component.css']
})
export class VeComponent implements OnInit {
    ngOnInit() {}
}