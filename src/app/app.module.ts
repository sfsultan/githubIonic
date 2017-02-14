import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganizationsPage } from '../pages/organizations/organizations';
import { UserDetailsPage } from '../pages/user-details/user-details';
import {GithubUsers} from '../providers/github-users';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    UserDetailsPage,
    OrganizationsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    UserDetailsPage,
    ReposPage,
    OrganizationsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, GithubUsers]
})
export class AppModule {}
