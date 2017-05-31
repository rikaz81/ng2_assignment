import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { TRANSMISSION, VECHICLE_BRANDS, VECHICLE_CONDITIONS } from "app/shared/config/common.constants";
import { VechicleService } from "app/shared/services/vechicle.service";

@Component({
  selector: 'app-edit-vechicle',
  templateUrl: './edit-vechicle.component.html',
  styleUrls: ['./edit-vechicle.component.css']
})
export class EditVechicleComponent implements OnInit {
  userForm: FormGroup;
  isUnsaved: boolean = false;
  constructor(private formBuilder: FormBuilder, private vechicleService: VechicleService) {

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
  public checkUnsaved() {
    return this.isUnsaved;
  }
}
