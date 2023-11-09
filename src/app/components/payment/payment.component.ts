import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeAPI } from 'src/app/models/ve.model';
import { VeAPIService } from 'src/app/services/ve.service';



@Component({
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
  
})
export class PaymentComponent implements OnInit {
    amount=0;
    ve:String;
    constructor(
        private activatedRoute : ActivatedRoute,
        private router : Router,
    ){}
    @ViewChild('paymentRef',{static:true}) paymentRef!:ElementRef;
  
  ngOnInit() {
    // this.amount=this.ve.giaGhe
    this.activatedRoute.paramMap.subscribe(params => {
        this.ve=params.get('ve');
        // var taikhoan= this.taikhoan.toString();
        
    });
window.paypal.Buttons({
    style:{
        layout:'horizontal',
        color:'blue',
        shape:'rect',
        label:'paypal'
    },
    createOrder:(data:any,actions:any)=>{
        return actions.order.create({
            purchase_units:[
                {
                    amount:{
                        value:this.ve.toString(),
                    currency_code:'USD'
                    }
                }
            ]
        })
    },
    onApprove:(data:any,actions:any)=>{
        return actions.order.capture().then((details:any)=>{
            console.log(details);
            if(details.status === 'COMPLETED'){
                this.router.navigate(['/paymentsuccess',{details:details.id}]) 
            }
        })
    },
    onError:(error:any)=>{
        console.log(error);
    }

}).render(this.paymentRef.nativeElement)

  }
}
