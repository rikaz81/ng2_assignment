import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { URL_CONST } from "app/shared/config/common.constants";
import { UserService } from "app/shared/services/user.service";

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
  description: string,
  imgUrl: string
};




@Injectable()
export class VechicleService {

  public vechicleId: string;

  constructor(private http: Http, private userService: UserService) { }

  addVechicleForSale(vechicle: VechicleTO) {
    console.log("Inside Add Vechicle Services", vechicle);

    // return this.http.post(URL_CONST.BACK_END_HOST + 'vechicle', vechicle, { headers: this.getHeader() }).toPromise()
    //   .then(this.extractData)
    //   .catch(this.handleErrorPromise);

    return this.http.post(URL_CONST.BACK_END_HOST + 'vechicle', vechicle, this.getRequestOptions())
      .map((response: Response) => response.json());

  }
  searchForVechicle() {
    console.log("Inside Search Vechicle Services");
  }

  getPost() {

    return this.http.get(URL_CONST.BACK_END_HOST + 'vechicle', { headers: this.getHeader() }).map((response) => {
      console.log(response.json());
      // return response.json();
      let vechicles = response.json().map((item) => {
        let vechicle: VechicleTO = <VechicleTO>{};
        vechicle.id = item._id;
        vechicle.brand = item.brand;
        vechicle.vechicleModel = item.vechicleModel;
        vechicle.transmission = this.transmissionWrapper(item.transmission);
        vechicle.vtype = item.vtype;
        vechicle.condition = this.conditionWrapper(item.condition);
        vechicle.modelYear = item.modelYear;
        vechicle.mileAge = item.mileAge;
        vechicle.price = item.price;
        vechicle.priceNegotiable = item.priceNegotiable;
        // vechicle.fuelTypes = item.fuelTypes;
        vechicle.contactName = item.contactName;
        vechicle.contactPlace = item.contactPlace;
        vechicle.contactPhone = item.contactPhone;
        vechicle.description = item.description;
        vechicle.imgUrl = item.imgUrl;

        if (vechicle.imgUrl == null || vechicle.imgUrl == "") {
          vechicle.imgUrl = "http://www.copyright-free-photos.org.uk/cars/mini-cooper.jpg";
        }


        return vechicle;
      });
      return vechicles;
    }).catch((data) => {
      console.log("ERROR @ Service", data);
      return Observable.throw(data);
    });
  }

  getRequestOptions() {
    return new RequestOptions({ headers: this.getHeader() });
  }
  getHeader() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('x-access-token', this.userService.getToken());

    return headers;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

  deleteVechicleFromSale(itemId: string) {
    console.log("Inside Delete Vechicle Service", itemId);

    return this.http.delete(URL_CONST.BACK_END_HOST + 'vechicle/' + itemId, { headers: this.getHeader() }).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);

  }

  setEditableVechicleReference(vechicleIdRef: string) {
    this.vechicleId = vechicleIdRef;
  }

  clearEditableVechicleReference() {
    this.vechicleId = null;
  }

  getEditableVechicleReference() {
    return this.vechicleId;
  }

  getVechicleById(itemId: string) {
    return this.http.get(URL_CONST.BACK_END_HOST + 'vechicle/' + itemId, { headers: this.getHeader() }).map((response) => {
      // console.log(response.json());
      return response.json();

    }).catch((data) => {
      console.log("ERROR @ getVechicleById Service", data);
      return Observable.throw(data);
    });
  }

  editVechicleForSale(vechicle: VechicleTO) {
    console.log("Inside Edit Vechicle Service");

    return this.http.put(URL_CONST.BACK_END_HOST + 'vechicle/' + vechicle.id, vechicle, this.getRequestOptions())
      .map((response: Response) => response.json());

  }

  private transmissionWrapper(transmission: string) {

    switch (transmission) {
      case "A":
        transmission = "Auto";
        break;
      case "M":
        transmission = "Manual";
        break;
      case "T":
        transmission = "Tiptronic";
        break;
      default:
        transmission = "Other";
        break;
    }

    return transmission;
  }

  private conditionWrapper(condition: string) {

    switch (condition) {
      case "N":
        condition = "Brand New";
        break;
      case "U":
        condition = "Used";
        break;
      case "R":
        condition = "Reconditioned";
        break;
      default:
        condition = "";
        break;
    }

    return condition;
  }
}
