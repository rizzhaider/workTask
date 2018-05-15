import { SubCategory } from './../shared/model/subCategory.model';
import { Product } from './../shared/model/product.model';
import { Category } from './../shared/model/category.model';
import { CategoryType } from './../shared/enums/category-type.enum';
import { ProductService } from './../services/product.service';
import { Village } from './../shared/model/village.model';
import { Block } from './../shared/model/block.model';
import { CustomerDetails } from './../shared/model/customerdetail.model';
import { District } from './../shared/model/district.model';
import { Addresstype } from './../shared/enums/address-type.enum';
import { CustomerService } from './../services/customer.service';

import { State } from './../shared/model/states.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  states: State[];
  districts: District[];
  blocks: Block[];
  villages: Village[];
  categories: Category[];
  subCategories:SubCategory[];
  customersDetails: CustomerDetails = null;
  productList: Product = null;

  public sideBarcollapsedHome: boolean = false;

  constructor(private customerService: CustomerService,
    private productService: ProductService) { }

  ngOnInit() {
    this.fetchStates();
    this.fetchCategory();
    console.log(this.fetchCategory());
    this.customersDetails = new CustomerDetails();
    this.productList = new Product();
    this.customersDetails.StateID = '-1';
    this.customersDetails.DistrictID = '-1';
    this.customersDetails.BlockID = '-1';
    this.customersDetails.VillageID = '-1';
    this.productList.CategoryId = '-1';
    this.productList.subcategoryId = '-1'
  }
  buttonSidebarToggled(toggled: boolean) {
    this.sideBarcollapsedHome = toggled;
  }
  fetchStates() {

    this.customerService.getAddress(Addresstype.STATE, '0').subscribe(
      data => {
        console.log(data);
        this.states = data.List;
        console.log(data.List);
      },
      error => {
        //this.logService.error(error);
        //this.loading = false;
      });

  }
  onStateChange() {




    console.log(this.customersDetails.StateID);
    this.districts = [];
    this.blocks = [];
    this.villages = [];
    this.customersDetails.DistrictID = '-1';
    this.customersDetails.BlockID = '-1';
    this.customersDetails.VillageID = '-1';
    


    if (this.customersDetails.StateID != '-1') {
      this.fetchDistrict(this.customersDetails.StateID);


    }
  }

  fetchDistrict(stateId: string) {

    this.customerService.getAddress(Addresstype.DISTRICT, stateId).subscribe(
      data => {
        this.districts = data.List;
      }
    )
  }

  onDistrictChange() {

    this.blocks = [];
    this.villages = [];

    this.customersDetails.BlockID = '-1';
    this.customersDetails.VillageID = '-1';

    if (this.customersDetails.DistrictID != '-1') {
      this.fetchBlock(this.customersDetails.DistrictID);
      this.productService.getProduct(this.customersDetails.StateID, this.customersDetails.DistrictID, '0', '0').subscribe(
        data => {
          console.log(this.customersDetails.DistrictID);
          console.log(data._productList);
        }

      )
    }
  }


  fetchBlock(districtId: string) {
    this.customerService.getAddress(Addresstype.BLOCK, districtId).subscribe(
      data => {
        this.blocks = data.List;
      }
    )
  }


  onBlockChange() {

    this.villages = [];
    this.customersDetails.VillageID = '-1';
    if (this.customersDetails.BlockID != '-1') {
      this.fetchVillage(this.customersDetails.BlockID);

    }
  }

  fetchVillage(blockId: string) {
    this.customerService.getAddress(Addresstype.VILLAGE, blockId).subscribe(

      data => {
        this.villages = data.List;
      }
    )
  }

  fetchCategory() {
    this.productService.getCategory(CategoryType.CATEGORY, '0').subscribe(
      data => {
        this.categories = data.List;
      }

    )

  }
  onCategoryChange() {
    this.subCategories = [];
    this.productList.subcategoryId = '-1'
    if (this.productList.CategoryId != '-1') {
      this.productService.getProduct(this.customersDetails.StateID, this.customersDetails.DistrictID, this.productList.CategoryId, '0').subscribe(

        data => {
          console.log(data._productList)
        }
      )
      this.productService.getCategory(CategoryType.SUBCATEGORY,this.productList.CategoryId).subscribe(

        data => {
          this.subCategories = data.List;
          console.log(data.List)
          
        }
      )


    }
    
  }
onSubCategoryChange(){
 if (this.productList.subcategoryId != '-1'){
   
   this.productService.getProduct(this.customersDetails.StateID, this.customersDetails.DistrictID, this.productList.CategoryId, this.productList.subcategoryId).subscribe(

     data => {

       console.log(data._productList);
     }
   )

 }
}




}
