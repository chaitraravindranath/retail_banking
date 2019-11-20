import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PayeesService } from '../payees.service';
import Payee from '../Payee';  

@Component({
  selector: 'app-payee-edit',
  templateUrl: './payee-edit.component.html',
  styleUrls: ['./payee-edit.component.css']
})

export class PayeeEditComponent implements OnInit {
  angForm: FormGroup;
  payee: any = {};
  payees: Payee[]; 

  constructor(private route: ActivatedRoute, private router: Router, private ps: PayeesService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      PayeeName: ['', Validators.required],
      PayeeAccountNumber: [{value: '', disabled: true}, Validators.required],
      PayeeIFSCCode: ['', Validators.required],
      PayeeRemarks: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.editPayee(params['id']).subscribe(res => {
        this.payee = res;
        if (this.payee) {
          if (this.payee.PayeeName != undefined) {
            this.angForm.controls['PayeeName'].setValue(this.payee.PayeeName);
          }
          if (this.payee.PayeeAccountNumber != undefined) {
            this.angForm.controls['PayeeAccountNumber'].setValue(this.payee.PayeeAccountNumber);
          }
          if (this.payee.PayeeIFSCCode != undefined) {
            this.angForm.controls['PayeeIFSCCode'].setValue(this.payee.PayeeIFSCCode);
          }
          if (this.payee.PayeeRemarks != undefined) {
            this.angForm.controls['PayeeRemarks'].setValue(this.payee.PayeeRemarks);
          }
        }
      });
    });

  }

  fetchData() {
    this.ps.getPayees().subscribe((data: Payee[]) => {  
      this.payees = data;  
  });    
  }

  updatePayee(PayeeName, PayeeAccountNumber, PayeeIFSCCode, PayeeRemarks, id) {
    this.route.params.subscribe(params => {
      this.ps.updatePayee(PayeeName, PayeeAccountNumber, PayeeIFSCCode, PayeeRemarks, params.id);
      this.fetchData();
      this.router.navigate(['/payee-get']);
    });
  }
}  
