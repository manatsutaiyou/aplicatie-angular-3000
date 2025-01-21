import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Telefon } from '../model/telefon';
import { TelBasic } from '../model/tel-basic';
import { TelefonClass } from '../model/telefon-class';
import { TelefonieService } from '../service/telefonie.service';
import { AlertifyService } from '../service/alertify.service';
import { ReteleEnum } from '../model/retele-enum.enum';

@Component({
  selector: 'app-add-elements',
  templateUrl: './add-elements.component.html',
  styleUrls: ['./add-elements.component.css'],
  standalone: false
})
export class AddElementsComponent implements OnInit {
  section = {
    reteleTypes: new Map<string, any>([
      ['LTE', false],
      ['EDGE', false],
      ['2g', false],
      [ '3g', false],
      ['4g', false],
      [ '5g', false],
      ['5g+', false]
    ]),
    // reteleTypes: ['Edge', 'LTE', '2g', '3g', '4g', '5g', '5g+'],
    // selectedRetele: [] as string[]
  };
  trackByKey(index: number, item: { key: string; value: any }): string {
    return item.key;
  }
  @ViewChild('formTabs') formTabs: TabsetComponent | undefined;
  // @ViewChild('Form') addTelefonForm!: NgForm;
  // vor fi preluate mai tarziu din masters
  telefonTypes: Array<string> = ['Telefon', 'Smartphone', 'iPhone','Telefon cu clapeta', 'Telefon vechi' ];
  // reteleTypes: string[] = ['Edge', 'LTE', '2g', '3g', '4g', '5g', '5g+']
  telefonView: TelefonClass = {
    ID: 0,
    name: '',
    type: '',
    pret: null,
    SellExc: 1,
    Anmodel: null,
    procesor: '',
    memorie: '',
    baterie: '',
    image: undefined,
    display: '',
    retele: [],
  //   addRetea:function (retea: ReteleEnum): void {
  //     if (!this.retele.includes(retea)) {
  //       this.retele.push(retea);
  //     }
  // }
}
  ;
isYearInvalid = false;
 NextClicked: boolean = false;
 telefon = new TelefonClass();

  onCheckboxChange(event: Event, retea: string): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.telefonView.retele.push(retea);
    } else {
      const index = this.telefonView.retele.indexOf(retea);
      if (index > -1) {
        this.telefonView.retele.splice(index, 1);
      }
    }

  }

  onYearChange(value: number) {
    if (value < 1980 || value > 2025) {
      this.isYearInvalid = true; 
    } else {
      this.isYearInvalid = false; 
    }
  }
  // toggleSelection(retele: string): void {
  //   const index = this.telefonView.retele.indexOf(retele);
  //   if (index === -1) {
  //     this.telefonView.retele.push(retele);
  //   } else {
  //     this.telefonView.retele.splice(index, 1);
  //   }
  // }
  // logSelection() {
  //   console.log('Selected retele:', this.telefonView.retele);
  // }


  
  // onYearChange(event: any) {
  //   if (event) {
  //     const year = event.getFullYear(); // Get only the year part
  //     this.telefonView.Anmodel = year;  // Set only the year in the model
  //   } else {
  //     this.telefonView.Anmodel = null; // If no date selected, reset the value
  //   }
  // }

  // set Anmodel(value: Date | null) {
  //   if (value) {
  //     // Set only the year part (discard other parts like month and day)
  //     const year = value.getFullYear();
  //     this.telefonView.Anmodel = new Date(year, 0, 1); // Set to January 1st of that year
  //   } else {
  //     this.telefonView.Anmodel = null;
  //   }
  // }
  

  constructor(private fb: FormBuilder, 
              private router: Router,
              private TelefonieService: TelefonieService,
              private alertify: AlertifyService) { }

  addTelefonForm!: FormGroup;  
createAddTelefonForm(){
  this.addTelefonForm= this.fb.group({
 
            SellExc: [null, Validators.required],
            name: [null, Validators.required],
            type: [null, Validators.required],
            pret: [null, Validators.required],})
          
          
  
}
// getter method

get BasicInfo(){
 return this.addTelefonForm as FormGroup;
}
get SellExc(){
  return this.addTelefonForm.controls['SellExc'] as FormGroup
}
// get PriceInfo(){
//   return this.addTelefonForm.controls['pret'] as FormGroup
// }
// get Price(){
//   return this.PriceInfo.controls['pret'] as FormControl
// }
// get TypeInfo(){
//   return this.addTelefonForm.controls['type'] as FormGroup
// }
// get Type(){
//   return this.PriceInfo.controls['type'] as FormControl
// }

ngOnInit() {

  this.createAddTelefonForm();
  if (!Array.isArray(this.telefonView.retele)) {
    this.telefonView.retele = [];
  }
  }
onBack(){
  this.router.navigate(['/']);
}

// aici puneam argumentul daca nu foloseam viewchild
onSubmit(){
  if (this.addTelefonForm.valid) {
  this.mapTelefonClass();
  this.TelefonieService.addTelefon(this.telefon);
  this.alertify.success('Ai adaugat un anunt nou!'); 
  console.log(this.telefon); 

  if(this.SellExc.value === '2'){
    this.router.navigate(['/schimba_telefon'])
  } else {
    this.router.navigate(['cumpara-telefon'])
  }
} else {
  this.alertify.error('Adaugarea nu a reusit');
  
}
}

// functie de mapping - vezi telefonie service
mapTelefonClass(): void {
  this.telefon.ID = this.TelefonieService.newTelID();
  this.telefon.SellExc = +this.addTelefonForm.get('SellExc')?.value; 
  this.telefon.name = this.addTelefonForm.get('name')?.value || ''; 
  this.telefon.pret = +this.addTelefonForm.get('pret')?.value || null; 
  this.telefon.type = this.addTelefonForm.get('type')?.value || ''; 
  this.telefon.Anmodel= this.addTelefonForm.get('Anmodel')?.value || null;
  this.telefon.procesor= this.addTelefonForm.get('procesor')?.value || '';
  this.telefon.memorie = this.addTelefonForm.get('memorie')?.value || '';
  this.telefon.baterie = this.addTelefonForm.get('baterie')?.value || '';
  this.telefon.image = this.addTelefonForm.get('image')?.value || undefined;
  this.telefon.display = this.addTelefonForm.get('display')?.value || '';
  this.telefon.retele = this.addTelefonForm.get('retele')?.value || [];
}

// trackByKey(index: number, retea: any): string {
//   return retea.key;
// }


selectTab(tabId: number, IsCurrentTabValid?: boolean) {
  this.NextClicked = true; // validare la click

  if (this.formTabs?.tabs[tabId]) {
    // skip daca e undefined, ca sa pot sa dau inapoi indiferent
    if (IsCurrentTabValid === undefined || IsCurrentTabValid) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
}}
