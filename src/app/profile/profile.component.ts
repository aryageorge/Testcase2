import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(){
    
  }
ngOnInit(): void {
  
}
searchValue: string ='Arya';
searchValues:string= '12';
searchValue1: string ='cse';
searchValue2: string ='Ekm';


changeSearchValue(eventData: Event){
  console.log((<HTMLInputElement>eventData.target).value);
  this.searchValue= (<HTMLInputElement>eventData.target).value;
  this.searchValues= (<HTMLInputElement>eventData.target).value;
  this.searchValue1= (<HTMLInputElement>eventData.target).value;
  this.searchValue2= (<HTMLInputElement>eventData.target).value;
  
}
}
