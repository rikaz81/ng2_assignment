import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { TRANSMISSION, VECHICLE_BRANDS, VECHICLE_CONDITIONS } from "app/shared/config/common.constants";
import { VechicleService } from "app/shared/services/vechicle.service";

export interface VechicleTO {
  id: string,
  brand: string,
  vechicleModel: string,
  transmission: string,
  vtype: string,
  condition: string,
  modelYear: string,
  mileAge: string,
  price: string,
  priceNegotiable: string,
  fuelTypes: string,
  contactName: string,
  contactPlace: string,
  contactPhone: string,
  imgUrl: string
};

@Component({
  selector: 'app-add-vechicle',
  templateUrl: './add-vechicle.component.html',
  styleUrls: ['./add-vechicle.component.css']
})
export class AddVechicleComponent implements OnInit {
  transmissions: Array<any> = [];
  brands: Array<any> = [];
  conditions: Array<any> = [];
  fuelType: Array<any> = [{ "text": "Petrol" }, { "text": "Diesel" }, { "text": "Hybrid" }, { "text": "Gas" }, { "text": "Other" }];
  isUnsaved: boolean = false;
  userForm: FormGroup;
  // fuelTypesArray:Array<any>= [];

  constructor(private formBuilder: FormBuilder, private vechicleService: VechicleService) {

    this.transmissions = TRANSMISSION;
    this.brands = VECHICLE_BRANDS;
    this.conditions = VECHICLE_CONDITIONS;

    this.userForm = formBuilder.group({
      'brand': ['', [Validators.required]],
      'vechicleModel': ['', [Validators.required]],
      'transmission': ['', [Validators.required]],
      'vtype': ['', [Validators.required]],
      'condition': ['', [Validators.required]],
      'modelYear': ['', []],
      'mileAge': ['', []],
      'price': ['', [Validators.required]],
      'priceNegotiable': ['', []],
      'fuelType[]': ['', [Validators.required]],
      'contactName': ['', [Validators.required]],
      'contactPlace': ['', [Validators.required]],
      'contactPhone': ['', [Validators.required]],
      'imgUrl': ['', []],
      'fuelTypes': formBuilder.array([
        [
          [false, false, false], []
        ]
      ])

    });


  }

  ngOnInit() {
  }
  handleForSubmit(form) {
    // console.log('Form Submitted ', form.value);
    // console.log(this.userForm.value);


    console.log(this.userForm.value['brand']);
    //  let vechicle :VechicleTO = null;
    let vechicle: VechicleTO = <VechicleTO>{};
    vechicle.brand = this.userForm.value['brand'];
    vechicle.vechicleModel = this.userForm.value['vechicleModel'];
    vechicle.transmission = this.userForm.value['transmission'];
    vechicle.vtype = this.userForm.value['vtype'];
    vechicle.condition = this.userForm.value['condition'];
    vechicle.modelYear = this.userForm.value['modelYear'];
    vechicle.contactName = this.userForm.value['contactName'];
    vechicle.contactPlace = this.userForm.value['contactPlace'];
    vechicle.contactPhone = this.userForm.value['contactPhone'];
    vechicle.imgUrl = this.userForm.value['imgUrl'];


    this.vechicleService.addVechicleForSale(vechicle);
  }

  public checkUnsaved() {
    return this.isUnsaved;
  }

  public editVechicle(vechicleId) {
   console.log('Inside Edit Vechcle',vechicleId);    
  }
}
