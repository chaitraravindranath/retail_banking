import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getData(){  
		return this.httpClient.get('http://localhost:3000/myContacts');  
	}  
}
