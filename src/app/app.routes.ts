import { Routes } from '@angular/router';
import { ContactsTableComponent } from './contacts/contacts-table/contacts-table.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { SentMessagesComponent } from './messages/sent-messages/sent-messages.component';
import { ReceivedMessagesComponent } from './messages/received-messages/received-messages.component';
import { FavoritesComponent } from './messages/favorites/favorites.component';
import { TrashComponent } from './messages/trash/trash.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { provideRouter, withDebugTracing } from '@angular/router';
import { ApplicationConfig } from '@angular/core';

// Define routes
export const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactsTableComponent }, 
  { 
    path: 'messages', 
    component: MessagesListComponent,
    children: [
      { path: 'sent', component: SentMessagesComponent },
      { path: 'received', component: ReceivedMessagesComponent },
      { path: 'favorites', component: FavoritesComponent }
    ]
  },
  { path: 'trash', component: TrashComponent },
  { path: 'settings', component: SettingsComponent },
];

// Configure app routing
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withDebugTracing())]  // Use 'routes' here instead of 'appRoutes'
};
