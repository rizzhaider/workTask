import { Observable } from 'rxjs/Observable';
import { environment } from './../../environments/environment';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LanguageService {

  constructor(private http: Http) { }

  private baseURL = environment.baseRESTURI;

  private getLanguageURL = this.baseURL + '/languagelist';

   getLanguageList(){  

   return this.http.get(this.getLanguageURL)

   .map((response :
   
   Response) => {

     let data = response.json();
     console.log(data);
     return data;
     
     
   }).catch((error: any) => Observable.throw(error.json().error || 'server error'));

  }
  
}
