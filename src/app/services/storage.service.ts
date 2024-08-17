import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  setStorage(value: string){
    localStorage.setItem('value',value);
  }
  getStorage(){
    var values = [],
    KEYS = Object.keys(localStorage),
    i = KEYS.length;
  while ( i-- ) {
    values.push( localStorage.getItem(KEYS[i]) );
  }
  return values;
  }
  clearStorage(){
    localStorage.clear();
  }
}
