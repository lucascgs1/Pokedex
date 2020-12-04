import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getData(key: string): any {
    return JSON.parse(localStorage.getItem('cache#' + key) || '{}');
  }

  setData(key: string, data: any) {

    console.log(data);
    localStorage.setItem('cache#'+ key, JSON.stringify(data));
  }

  remove(key: string): void {
      window.localStorage.removeItem('cache#' + key);
  }



}
