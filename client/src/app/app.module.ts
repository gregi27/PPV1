import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {HttpModule, Http, RequestOptions} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {routing, appRoutingProviders} from "./app.router";
import {DropdownModule} from "ngx-dropdown";
import { ProfileComponent } from './profile/profile.component';

import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import { InfoComponent } from './info/info.component';
import {FlashMessagesModule} from "angular2-flash-messages";
import { PublicationsComponent } from './publications/publications.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { CategoryComponent } from './category/category.component';
import { DetailCategoryComponent } from './category/detail-category/detail-category.component';
import { NewCategoryComponent } from './category/new-category/new-category.component';
import { TagsComponent } from './tags/tags.component';
import { TagsSearchComponent } from './tags/tags-search/tags-search.component';
import { SearchComponent } from './search/search.component';
import { CalComponent } from './cal/cal.component';
import {Auth} from "./services/auth.service";
import {AuthGuard} from "./auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    InfoComponent,
    PublicationsComponent,
    FileSelectDirective,
     CategoryComponent,
    DetailCategoryComponent,
    NewCategoryComponent,
    TagsComponent,
    TagsSearchComponent,
    SearchComponent,
    CalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DropdownModule,
    FlashMessagesModule,
    Ng2FilterPipeModule,
    NguiAutoCompleteModule,
  ],
  providers: [
    appRoutingProviders,
    AuthHttp,
    Auth,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
