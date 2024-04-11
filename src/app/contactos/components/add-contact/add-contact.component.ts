import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../interfaces/contact.interface';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {

  @Input()
  public contact:Contact={
    name:'',
    phoneNumber:'',
  }

  @Output()
  newContact = new EventEmitter<Contact>();

  emitContact(){
    if(!this.contact.name || this.contact.phoneNumber.length <= 9) return;
    this.newContact.emit({...this.contact});

    this.contact = {name: '', phoneNumber:''}
  };

}
