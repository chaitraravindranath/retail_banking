import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PayeesService {

  constructor(private httpClient: HttpClient) { }

  addPayee(PayeeName, PayeeAccountNumber, PayeeIFSCCode, PayeeRemarks) {
    console.log(PayeeName, PayeeAccountNumber, PayeeIFSCCode, PayeeRemarks);
    const obj = {
      PayeeName,
      PayeeAccountNumber,
      PayeeIFSCCode,
      PayeeRemarks
    };
    console.log(obj);
    this.httpClient.post("http://localhost:3000/payees",obj).subscribe(res => {
      console.log("---res---",+JSON.stringify(res));
      alert("Succesfully Added Payee details");
    });
  }

  getPayees() {
    return this.httpClient.get("http://localhost:3000/payees");
  }

  editPayee( id:any) {  
    return this.httpClient.get("http://localhost:3000/payees/" +id);  
    }  

    updatePayee(PayeeName, PayeeAccountNumber, PayeeIFSCCode, PayeeRemarks, id:any) {  
      const obj = {  
        PayeeName,
        PayeeAccountNumber,
        PayeeIFSCCode,
        PayeeRemarks 
      };  
      console.log ("---update---",id, obj);
      this.httpClient.put("http://localhost:3000/payees/" +id,obj).subscribe(res => {
        console.log("---res---",+JSON.stringify(res));
        alert("Succesfully Updated Payee details");
      });  
  }  

  deletePayee(id: any) { 
    return this.httpClient.delete("http://localhost:3000/payees/" +id);  
  } 
} 