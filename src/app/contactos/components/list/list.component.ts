import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Contact } from '../../interfaces/contact.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public contact:Contact={
    name: '',
    phoneNumber: ''
  }

  @Input()
  public agenda:Contact[] =[];


  @Output()
  onDeleteId = new EventEmitter<string>();

  onDeleteContact(index:string):void{
    this.onDeleteId.emit(index);
    
  };

  @Output()
  onEditContact = new EventEmitter<Contact>();

  editContact(contact:Contact){
    contact.edited = true;
   this.onEditContact.emit(contact)
  };
}
