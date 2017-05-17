import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()

export class CategoryService {

  constructor(private _http:Http){

  }

  getAll(category, user_id){
    return this._http.get('/api/category/'+category+'/'+user_id)
      .map(res => res.json());
    //return PROJEKTY.map(p => this.clone(p));
  }

  getList(list){
    var headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this._http.post('/api/category/get/list/', JSON.stringify(list), {headers: headers}).map(res => res.json());
  }

  getOne(id){
    return this._http.get('/api/category/category/'+id)
      .map(res => res.json());
    //return PROJEKTY.map(p => this.clone(p));
  }

  saveItem(project, category, fileName){
    //console.log('bla');
    let Project = Object.assign(project , fileName);
    var headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this._http.post('/api/category/save/'+category, JSON.stringify(Project), {headers: headers}).map(res => res.json());
  }

  saveLinks(insertID, name, InternalLinks){
    var headers = new Headers();
    headers.append('Content-type', 'application/json');
      return this._http.post('/api/category/insert/'+insertID+'/'+name, JSON.stringify(InternalLinks), {headers: headers}).map(res => res.json()).subscribe(r=>{

      });

  }

  updateItem(project,fileName, id){
    let Project = Object.assign(project , fileName);
    var headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this._http.post('/api/category/update/'+id, JSON.stringify(Project), {headers: headers}).map(res => res.json());
  }

  deleteItem(id){
    return this._http.get('/api/category/delete/delete/'+id)
      .map(res => res.json());
    //return PROJEKTY.map(p => this.clone(p));
  }

  createEvent(project){
    let Project = project;
    var headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this._http.post('/api/google/event/', JSON.stringify(Project), {headers: headers}).map(res => res.json()).subscribe(r=>{

    });
  }

  private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }
}
