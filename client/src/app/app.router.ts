import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import {InfoComponent} from "./info/info.component";
import {CategoryComponent} from "./category/category.component";
import {NewCategoryComponent} from "./category/new-category/new-category.component";
import {DetailCategoryComponent} from "./category/detail-category/detail-category.component";
import {TagsComponent} from "./tags/tags.component";
import {TagsSearchComponent} from "./tags/tags-search/tags-search.component";
import {SearchComponent} from "./search/search.component";
import {CalComponent} from "./cal/cal.component";
import {AuthGuard} from "./auth.guard";



const appRoutes: Routes= [
  {
    path:'plocha/info',
    component: InfoComponent
  },
  {
    path:'plocha/',
    component: DashboardComponent,
  },
  {
    path:'plocha/calendar',
    component: CalComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'plocha/tags',
    component: TagsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'tags/search',
    component: TagsSearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'fulltext/search',
    component: SearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'category/:category',
    component: CategoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'category/:category/:id',
    component: DetailCategoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'new/:category',
    component: NewCategoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'update/:category/:id',
    component: NewCategoryComponent,
    canActivate: [AuthGuard]
  },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
