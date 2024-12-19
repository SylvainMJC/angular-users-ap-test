import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ChatComponent } from './components/chat/chat.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UsersComponent } from './components/users/users.component';

import { UsersDetailsComponent } from './components/users-details/users-details.component';

export const routes: Routes = [
  {
    path: 'errorpage',
    pathMatch: 'full',
    component: ErrorpageComponent,
  },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  { path: 'home', pathMatch: 'full', component: HomePageComponent },
  { path: 'contact', pathMatch: 'full', component: ContactComponent },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  { path: 'users', pathMatch: 'full', component: UsersComponent },
  {
    path: 'users/:userId',
    pathMatch: 'full',
    component: UsersDetailsComponent,
  },
  { path: 'settings', pathMatch: 'full', component: SettingsComponent },
  { path: 'chat', pathMatch: 'full', component: ChatComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirection par défaut
  { path: '**', component: ErrorpageComponent }, // Redirection pour les routes inconnues
];
