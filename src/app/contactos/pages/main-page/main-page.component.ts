import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interfaces/contact.interface';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit{

  ngOnInit(): void {
    const data = localStorage.getItem('contacts');
    if(data){
      this.agendaMain = JSON.parse(data)
    }
  }

 
  public agendaMain:Contact[]=[];

  addContact(contact:Contact){
    if(contact.edited){
      let id=contact.id;
      this.agendaMain.forEach( (element, i)=>{
        if(element.id === id){
          this.agendaMain[i] = contact
          localStorage.setItem('contacts', JSON.stringify(this.agendaMain));
        }
      })
      
    } else {
      const newContact:Contact = {id:uuid(), ...contact}
      this.agendaMain.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(this.agendaMain));
    }
  };

  deleteContactById(id:string):void{
    this.agendaMain = this.agendaMain.filter(contact => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(this.agendaMain))
  };

  editContact(contact:Contact){
    this.contactToEditMain= contact;
  }

  contactToEditMain:Contact={
    name: '',
    phoneNumber: ''
  }

}
