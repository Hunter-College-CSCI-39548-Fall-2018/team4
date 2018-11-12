import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    crossDomain: true
};
 
@Injectable()
export class itemService {
 
  constructor(private http:HttpClient) {}

    // Uses http.get() to load data from a single API endpoint
  getMetrocards(id: any) {
        console.log(JSON.stringify(id) + ' id')
        return this.http.get('http://localhost:3000/getMetrocards/'+ id, httpOptions);
  }
  addMetrocard(metrocard:any) {
      return this.http.post('http://localhost:3000/addMetrocard',metrocard, httpOptions).pipe(map((res: any) => {
        }))
    }
  removeMetrocard(id:any) {
        return this.http.delete('http://localhost:3000/removeMetrocard/' + id, httpOptions).pipe(map((res: any) => {
          }))
      }
  updateMetrocard(id:any) {
        return this.http.delete('http://localhost:3000/updateMetrocard/' + id, httpOptions).pipe(map((res: any) => {
          }))
      }
   }
