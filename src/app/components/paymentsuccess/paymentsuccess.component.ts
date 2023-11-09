import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  templateUrl: './paymentsuccess.component.html',
})
export class PaymentSuccessComponent implements OnInit {
  

  constructor(
    private formBuilder : FormBuilder,
    private activatedRoute : ActivatedRoute,
    private router:Router,
    
) { }
  ngOnInit(){
    
  
  }
}