import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-elements',
  templateUrl: './add-elements.component.html',
  styleUrls: ['./add-elements.component.css'],
  standalone: false
})
export class AddElementsComponent implements OnInit {
  @ViewChild('formTabs') formTabs: TabsetComponent | undefined;
  @ViewChild('Form') addTelefonForm!: NgForm;
  // vor fi preluate mai tarziu din masters
  telefonTypes: Array<string> = ['Telefon', 'Smartphone', 'iPhone','Telefon cu clapeta', 'Telefon vechi' ];
  telefonView: any = {
    ID: null,
    name:null,
    type:null,
    price:null,
  };
  

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
selectTab(tabId: number) {
  if (this.formTabs?.tabs[tabId]) {
    this.formTabs.tabs[tabId].active = true;
  }
}
}
