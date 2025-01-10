import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-elements',
  templateUrl: './add-elements.component.html',
  styleUrls: ['./add-elements.component.css'],
  standalone: false
})
export class AddElementsComponent implements OnInit {
  @ViewChild('Form') addTelefonForm!: NgForm;
  constructor(private router: Router) { }

ngOnInit() {
  }
onBack(){
  this.router.navigate(['/']);
}
// aici puneam argumentul daca nu foloseam viewchild
onSubmit(){
  console.log('forms ok');
  console.log(this.addTelefonForm);
}
}
