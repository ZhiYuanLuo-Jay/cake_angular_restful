import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // (1) Imported HttpClient into the service. 
import { identity } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {}

  getCakes(){
    // our http response is an Observable, store it in a variable
    return this._http.get('/cakes');
  }

  // getTaskById(id:string) {
  //   return this._http.get(`/task/${id}`); // passing the id to the routes.js
  // }

  // updateTask(editTask){
  //   return this._http.put(`/task/`, editTask);
  // }

  addCake(newCake){
    console.log(newCake);
    return this._http.post(`/cake/`, newCake)  // function call with function value returned
  }

  addComment(newComment){
    console.log("new comment sent", newComment);
    return this._http.put(`/cake/`, newComment)  // function call with function value returned
  }

  // delTask(id:string) {
  //   return this._http.delete(`/task/${id}`);
  // }


}
