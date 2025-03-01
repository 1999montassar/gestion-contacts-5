import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule here

@Component({
  selector: 'app-contacts-table',
  standalone: true,  // This indicates the component is standalone
  imports: [CommonModule],  // Import CommonModule to use *ngFor
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent {
  contacts = [
    { nom: 'John Doe', email: 'john@example.com', telephone: '1234567890' },
    { nom: 'Jane Smith', email: 'jane@example.com', telephone: '0987654321' }
  ];

  ajouterContact() {
    // Function to add a new contact
    const newContact = { 
      nom: 'New Contact', 
      email: 'new@example.com', 
      telephone: '0000000000' 
    };
    this.contacts.push(newContact);  // Add the new contact to the contacts array
    console.log('Contact added:', newContact);
  }

  consulterContact(contact: any) {
    // Function to view contact details
    alert(`Viewing contact: \nName: ${contact.nom} \nEmail: ${contact.email} \nPhone: ${contact.telephone}`);
    console.log('Viewing contact:', contact);
  }

  modifierContact(contact: any) {
    // Function to modify the contact (for example, change the name)
    const modifiedContact = { ...contact, nom: 'Modified Name' };  // Modify the contact's name
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.contacts[index] = modifiedContact;  // Replace the old contact with the modified one
    }
    console.log('Modified contact:', modifiedContact);
  }

  supprimerContact(contact: any) {
    // Function to delete a contact
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.contacts.splice(index, 1);  // Remove the contact from the array
    }
    console.log('Contact deleted:', contact);
  }
}
