import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    crossDomain: true
};

// let options = new RequestOptions({withCredentials: true});

@Injectable()
export class userService {

    constructor(private http: HttpClient) { }

    // Uses http.get() to load data from a single API endpoint
    getUsers() {
        return this.http.get('http://localhost:5000/getUsers', httpOptions).pipe(map((res: any) => {
        }))
    }
    createUser(user: any) {
        return this.http.post('http://localhost:5000/signup', { params: user }, httpOptions).pipe(map((res: any) => {
        }))
    }
    // updateUserPreferences(user: any) {
    //     return this.http.put('http://localhost:5000/updateUser', { params: user }, httpOptions).pipe(map((res: any) => {
    //     }))
    // }
    authenticateUser(user: any) {
        return this.http.post('http://localhost:5000/signin', { params: user }, httpOptions).pipe(map((res: any) => {
        }))
    }
};
