import { Component, OnInit, Input } from '@angular/core'; // add Input to our imports

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  @Input() cakeToShow: any;  // use the @Input decorator to indicate this comes from the parent
  constructor() { }
  ngOnInit() {
  }

}
