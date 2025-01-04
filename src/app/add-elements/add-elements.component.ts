import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-elements',
  templateUrl: './add-elements.component.html',
  styleUrls: ['./add-elements.component.css'],
  standalone: false
})
export class AddElementsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
onBack(){
  this.router.navigate(['/']);
}
}
