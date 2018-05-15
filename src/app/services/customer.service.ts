
import { Observable } from 'rxjs/Observable';
import { environment } from './../../environments/environment';
import { Addresstype } from './../shared/enums/address-type.enum';
import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';

@Injectable()
export class CustomerService {

  constructor(private http:Http) { }

  private baseURL = environment.baseBZURI;
  private getAddressURL = this.baseURL + '/GetDistrictBlockVilage'
  private getProductURL = this.baseURL + '/GetCategoryProductDetail'



  getAddress(addressType:Addresstype, id :string){

       let headers = new Headers({ 'Cache-Control': 'max-age=0' });
        let options = new RequestOptions({ headers: headers });

        let _addressURL = this.getAddressURL;

        _addressURL = _addressURL + '?apiKey=' + environment.BZAPIkey;
        _addressURL = _addressURL + '&id=' +  id + '&type=' + addressType.toString();
        console.log(_addressURL);
           return this.http.get(_addressURL)
           .map((response:Response) => {
             let data = response.json();
             return data;
             
           }).catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }


  getProduct(StateId:string, DistrictId:string){

    let headers = new Headers ({'Cache-Control' : 'max-age=0'});
    let options = new RequestOptions ({headers : headers});
    
    let _productURL = this.getProductURL;

    _productURL = _productURL + '?apiKey=' + environment.BZAPIkey;
    _productURL = _productURL + '&Stateid=' + StateId + '&Districtid=' + DistrictId;
       
       return this.http.get(_productURL)
       .map((response:Response) => {
          
          let data = response.json();
          return data;
       }).catch((error:any) => Observable.throw(error.json().error || 'server error'));


  }

   

}
