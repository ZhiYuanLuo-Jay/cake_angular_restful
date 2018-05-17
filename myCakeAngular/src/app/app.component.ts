import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'; //(1) Import the HttpService 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Rate my cakes';
  newCake : any;
  cakeList = [];
  oneCake : any;
  newComment : any;

  constructor(private _httpService: HttpService){};  // (2) Make HttpService as an attribute in the class.

  ngOnInit(){
    this.getCakes();
    this.newCake = { name: "", image_url: ""} 
  }

  onSubmit() {
    // console.log(this.newCake.name);
    // console.log(this.newCake.image_url);
    this.newCake = {
      name:this.newCake.name,
      image_url: this.newCake.image_url
    }
    let addObserable = this._httpService.addCake(this.newCake);
    addObserable.subscribe(postdata => {
      console.log("Got data from post back", postdata);
      this.newCake = { name: "", image_url: "" };
      this.getCakes(); // After adding to the list, instantly display the updated info
    })
  }

  onComment(rating:number, comment:string, id:string) : void {
    console.log(`rating ${rating}, ${comment}, ${id}`);
    this.newComment = {
      id: id,
      rating: rating,
      comment: comment
    }
    let cmtObserable = this._httpService.addComment(this.newComment);
    cmtObserable.subscribe(postdata => {
      console.log("Got data from post back", postdata);
      // this.newCake = { rating: 1, comment: "" };
    })

  }

  getCakes(){
    let obserable = this._httpService.getCakes();
    obserable.subscribe(data => {
    console.log("Got our cakes!", data);
    this.cakeList = data['data']; 
    for (const el of this.cakeList) {
      el['rating'] = 5;
      el['comment'] = "";
    } // adding key value pair
    console.log("stored in attributes: cakeList", this.cakeList);
    });    
  }

  onClickCake(id:string, name:string, image_url:string, rating:number, comment:string) {
    console.log(`one cake info: ${id} ${name} ${image_url} ${rating} ${comment}`);
    this.oneCake = {id:id ,name: name, image_url: image_url, rating:rating, comment:comment}
   }

}
