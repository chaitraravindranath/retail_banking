import { Component, OnInit } from '@angular/core';
import Payee from '../Payee';  
import { PayeesService } from '../payees.service'; 

@Component({
  selector: 'app-payee-get',
  templateUrl: './payee-get.component.html',
  styleUrls: ['./payee-get.component.css']
})

export class PayeeGetComponent implements OnInit {

  payees: Payee[]; 
  config: any;
  constructor(private ps: PayeesService) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.payees
    };
   }  

  ngOnInit() {  
      this.fetchData();
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  fetchData(){
    this.ps.getPayees().subscribe((data: Payee[]) => {  
      this.payees = data;  
  }); 
  }

  deletePayee(id) { 
    console.log("----id----",id); 
    this.ps.deletePayee(id).subscribe(res => { 
      alert("Payee deleted successfully!"); 
      this.fetchData(); 
    });  
}

}
