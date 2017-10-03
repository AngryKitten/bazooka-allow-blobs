import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StaticDataService {

  constructor(private http: Http) { }

  public getJSON(path): Observable<Object[]> {
    return this.http.get(`../../assets/${path}.json`).map((res: any) => res.json());
  }
}
