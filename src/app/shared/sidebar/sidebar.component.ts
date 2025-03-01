import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isMessagesOpen = false; // Propriété pour gérer l'affichage du sous-menu

  toggleMessages() {
    this.isMessagesOpen = !this.isMessagesOpen; // Fonction pour basculer l'état du sous-menu
  }
}
