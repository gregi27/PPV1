import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()

export class SearchService {

  constructor(private _http:Http){

  }


  getSearch(word, user_id){
    let obj = {
      word: word,
    }
    var headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this._http.post('/api/search/'+user_id, JSON.stringify(obj), {headers: headers}).map(res => res.json());
  }




  private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }
}
