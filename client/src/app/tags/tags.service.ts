import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()

export class TagsService {

  constructor(private _http:Http){

  }

  getAll(user_id){
    return this._http.get('/api/tags/all/'+user_id)
      .map(res => res.json());
    //return PROJEKTY.map(p => this.clone(p));
  }

  saveTag(tag){
    //console.log(JSON.stringify(tag));
    var headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this._http.post('/api/tags/save/', JSON.stringify(tag), {headers: headers}).map(res => res.json());
  }

  saveRecord(tagIds, recordId){

    var headers = new Headers();
    headers.append('Content-type', 'application/json');
    for (let tag in tagIds){
      let list = [];
      let tagId = tagIds[tag]['tagId'];
      this.getList(tagId).subscribe(x =>{
        list = x[0].list_of_records.split(",");
        if( list.indexOf(String(recordId))== -1){
          let obj = {tagId: tagIds[tag]['tagId'],
            recordId: recordId
          }
          this._http.post('/api/tags/insert/', JSON.stringify(obj), {headers: headers}).map(res => res.json()).subscribe();
        }
      });

    }

  }

  getList(tagId){
    return this._http.get('/api/tags/'+tagId)
      .map(res => res.json());
  }

  getListByParent(tagId){
    return this._http.get('/api/tags/parent/'+tagId)
      .map(res => res.json());
  }

  deleteRecords(tagId, recordId){
    var headers = new Headers();
    headers.append('Content-type', 'application/json');
    let list = [];
    this.getList(tagId).subscribe(x => {
      list = x[0].list_of_records.split(",");
      list.splice(list.indexOf(String(recordId)),1);
      let obj = {
        tagId: tagId,
        list: list.toString(),
      };
      return this._http.post('/api/tags/delete/', JSON.stringify(obj), {headers: headers}).map(res => res.json()).subscribe();

    });

  }



  private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }
}
