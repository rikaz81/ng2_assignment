import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { TRANSMISSION, VECHICLE_BRANDS, VECHICLE_CONDITIONS } from "app/shared/config/common.constants";
import { VechicleService, VechicleTO } from "app/shared/services/vechicle.service";

@Component({
  selector: 'app-edit-vechicle',
  templateUrl: './edit-vechicle.component.html',
  styleUrls: ['./edit-vechicle.component.css']
})
export class EditVechicleComponent implements OnInit {
  userForm: FormGroup;
  isUnsaved: boolean = false;
  vechicleId: string;
  vechicle: VechicleTO;

  transmissions: Array<any> = [];
  brands: Array<any> = [];
  conditions: Array<any> = [];
  fuelType: Array<any> = [{ "text": "Petrol" }, { "text": "Diesel" }, { "text": "Hybrid" }, { "text": "Gas" }, { "text": "Other" }];
  // isUnsaved: boolean = false;
  // userForm: FormGroup;
  // fuelTypesArray:Array<any>= [];
  error: boolean = false;
  message: string = '';


  brand: string;

  constructor(private formBuilder: FormBuilder, private vechicleService: VechicleService) {


    this.transmissions = TRANSMISSION;
    this.brands = VECHICLE_BRANDS;
    this.conditions = VECHICLE_CONDITIONS;

    this.vechicleId = this.vechicleService.getEditableVechicleReference();
    console.log('Inside Edit Vechicle', this.vechicleId);
    this.vechicleService.getVechicleById(this.vechicleId).subscribe((data) => {
      console.log(data);
      console.log('Inside edit loaded');
      console.log(data.brand);
      console.log(data._id);

      this.vechicle = data;
      this.brand = data.brand;




      this.userForm = formBuilder.group({
        'brand': [data.brand, [Validators.required]],
        'vechicleModel': [data.vechicleModel, [Validators.required]],
        'transmission': [data.transmission, [Validators.required]],
        'vtype': [data.vtype, [Validators.required]],
        'condition': [data.condition, [Validators.required]],
        'modelYear': [data.modelYear, []],
        'mileAge': [data.mileAge, []],
        'price': [data.price, [Validators.required]],
        'priceNegotiable': [data.priceNegotiable, []],
        'fuelType[]': ['', [Validators.required]],
        'contactName': [data.contactName, [Validators.required]],
        'contactPlace': [data.contactPlace, [Validators.required]],
        'contactPhone': [data.contactPhone, [Validators.required]],
        'imgUrl': [data.imgUrl, []],
        'description': [data.description, []],
        'fuelTypes': formBuilder.array([
          [
            [false, false, false], []
          ]
        ])

      });









      // this.message = "Vechicle Added Successfuly to the sale!!!"
    }, (err) => {
      // this.error = true;
    });


    // console.log('Out side', this.brand);
    this.userForm = formBuilder.group({
      'brand': [this.brand, [Validators.required]],
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
      'description': ['', []],
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
    console.log(this.userForm.value);


    console.log(this.userForm.value['imgUrl']);
    //  let vechicle :VechicleTO = null;
    let vechicle: VechicleTO = <VechicleTO>{};
    vechicle.id = this.vechicleId;
    vechicle.brand = this.userForm.value['brand'];
    vechicle.vechicleModel = this.userForm.value['vechicleModel'];
    vechicle.transmission = this.userForm.value['transmission'];
    vechicle.vtype = this.userForm.value['vtype'];
    vechicle.condition = this.userForm.value['condition'];
    vechicle.modelYear = this.userForm.value['modelYear'];
    vechicle.mileAge = this.userForm.value['mileAge'];
    vechicle.priceNegotiable = this.userForm.value['priceNegotiable'];
    vechicle.price = this.userForm.value['price'];
    vechicle.contactName = this.userForm.value['contactName'];
    vechicle.contactPlace = this.userForm.value['contactPlace'];
    vechicle.contactPhone = this.userForm.value['contactPhone'];
    vechicle.description = this.userForm.value['description'];
    vechicle.imgUrl = this.userForm.value['imgUrl'];


    this.error = false;
    this.message = "Vechicle Details Updated Successfuly!"
    console.log(vechicle);

    this.vechicleService.editVechicleForSale(vechicle).subscribe((data) => {
      console.log(data);
      this.message = "Vechicle Details Updated Successfuly!"
    }, (err) => {
      this.error = true;
    });

  }
  public checkUnsaved() {
    return this.isUnsaved;
  }
}
