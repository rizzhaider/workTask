import { CategoryType } from './../shared/enums/category-type.enum';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Headers, Http, Response } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private http:Http) { }

  private baseURL = environment.baseBZURI;
  private getCategoryURL = this.baseURL + '/GetCategorySubCategory'; 
  private getProductURL = this.baseURL + '/GetCategoryProductDetail';
  
 
  getCategory(categoryType:CategoryType, id:string){
    let headers = new Headers ({'Cache-Control' : 'max-age=0'});
    let options = new RequestOptions ({headers : headers});
    
    let _categoryURl = this.getCategoryURL;
    _categoryURl = _categoryURl + '?apiKey=' + environment.BZAPIkey;
    _categoryURl = _categoryURl + '&id=' + id + '&type=' + categoryType.toString();
    console.log(_categoryURl);
    return this.http.get(_categoryURl)
    .map((response:Response) => {
       let data = response.json();
       return data;

    }).catch ((error:any) => Observable.throw(error.json().error || 'server error'));
   
  }


  
   getProduct(StateId:string, DistrictId:string, CatId:string, SubCatId:string){

    let headers = new Headers ({'Cache-Control' : 'max-age=0'});
    let options = new RequestOptions ({headers : headers});
    
    let _productURL = this.getProductURL;

    _productURL = _productURL + '?apiKey=' + environment.BZAPIkey;
    _productURL = _productURL + '&Stateid=' + StateId + '&Districtid=' + DistrictId + '&CatId=' + CatId + '&SubCatId=' + SubCatId;
       console.log(_productURL);
       return this.http.get(_productURL)
       .map((response:Response) => {
          
          let data = response.json();
          return data;
       }).catch((error:any) => Observable.throw(error.json().error || 'server error'));


  }

}
