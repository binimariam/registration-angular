import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  id: number
  constructor() {
   }

   getid()
   {
     return this.id;
   }
   setid(id)
   {
     this.id = id;
   }

}
