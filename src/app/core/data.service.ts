import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Rx';

const jsonDataUrl = './assets/data/cars.json';

@Injectable()
export class DataService {  
  constructor(private http: HttpClient) {}
  /**
   * Allow get all data from Json
   * @returns any
   */
  getCars(): any {
    
    return this.http.get(jsonDataUrl)
      .map( (response: Response) => {
         return response;
      });
  }

   /**
   * get a car by id from Json file
   * @returns Observable<any>
   */
  public getCarById(id: any): Observable<any> {
    return this.http.get(jsonDataUrl)
      .map((res: any) => res.find(car => car.id == id));
  }

}
