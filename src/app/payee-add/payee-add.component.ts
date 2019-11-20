import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { PayeesService } from '../payees.service'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payee-add',
  templateUrl: './payee-add.component.html',
  styleUrls: ['./payee-add.component.css']
})
export class PayeeAddComponent implements OnInit {

  angForm: FormGroup;  
  constructor(private fb: FormBuilder, private ps: PayeesService,private route: ActivatedRoute, private router: Router) {  
    this.createForm();  
  }

  createForm() {  
    this.angForm = this.fb.group({  
      PayeeName: ['', Validators.required ],  
      PayeeAccountNumber: ['', Validators.required ],  
      PayeeIFSCCode: ['', Validators.required ],  
      PayeeRemarks: ['', Validators.required ]   
    });  
  }  
  
  ngOnInit() { }

  addPayee(PayeeName, PayeeAccountNumber, PayeeIFSCCode,PayeeRemarks) {  
    this.route.params.subscribe(params => {
      this.ps.addPayee(PayeeName, PayeeAccountNumber, PayeeIFSCCode, PayeeRemarks); 
      this.router.navigate(['/payee-get']);
    });
  }  
 

}
