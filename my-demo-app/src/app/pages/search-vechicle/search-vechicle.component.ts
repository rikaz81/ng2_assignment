import { Component, OnInit } from '@angular/core';
import { TRANSMISSION, VECHICLE_BRANDS, VECHICLE_CONDITIONS } from "app/shared/config/common.constants";
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { VechicleService } from "app/shared/services/vechicle.service";
import { DUMMY_VECHICLE_LIST } from "app/shared/config/service.constants";
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'


@Component({
  selector: 'app-search-vechicle',
  templateUrl: './search-vechicle.component.html',
  styleUrls: ['./search-vechicle.component.css']
})
export class SearchVechicleComponent implements OnInit {
  transmissions: Array<any> = [];
  brands: Array<any> = [];
  conditions: Array<any> = [];
  userForm: FormGroup;
  vechicles: Array<any> = [];
  vechicles2: Observable<any>;

  currentDate = new Date();
  constructor(private formBuilder: FormBuilder, private vechicleService: VechicleService, private router: Router) {
    this.transmissions = TRANSMISSION;
    this.brands = VECHICLE_BRANDS;
    this.conditions = VECHICLE_CONDITIONS;

    this.loadVechicle();
    // this.vechicleService.getPost().subscribe((data) => this.vechicles = data, (err) => { console.log('Error Handled at componenet', err); });

    // this.vechicles = this.vechicleService.getPost();
    // this.vechicles = DUMMY_VECHICLE_LIST;



    this.userForm = formBuilder.group({
      'brand': ['A', [Validators.required]],
      'vechicleModel': ['', [Validators.required]],
      'transmission': ['A', [Validators.required]],
      'vtype': ['', [Validators.required]],
      'condition': ['A', [Validators.required]],
      'modelYear': ['', []],
      'mileAge': ['', []],
      'price': ['', [Validators.required]],
      'priceNegotiable': ['', []],
      'fuelType[]': ['', [Validators.required]],
      'fuelTypes': formBuilder.array([
        [
          [false, false, false], []
        ]
      ])

    });
  }

  ngOnInit() {
  }

  loadVechicle() {
    this.vechicleService.getPost().subscribe((data) => this.vechicles = data, (err) => { console.log('Error Handled at componenet', err); });
  }
  handleForSubmit(form) {
    // console.log('Form Submitted ', form.value);
    console.log(this.userForm);
    this.vechicleService.searchForVechicle();
  }

  deleteVechicleFromSale(vechicleId) {
    // localhost:3000/wizard/59106c40a3acac27dc01390c
    console.log('deleteVechicleFromSale ', vechicleId)

    this.vechicleService.deleteVechicleFromSale(vechicleId);
    this.router.navigate(['/', 'vechicle', 'search-vechicle']);

  }

  editVechicleFromSale(vechicleId) {
    // localhost:3000/wizard/59106c40a3acac27dc01390c
    console.log('Edit Vechicle Detected ', vechicleId)
    this.router.navigate(['/', 'vechicle', 'edit-vechicle']);
  }
}
