import { Injectable } from '@angular/core';
import { LocalServer } from '../server';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

   //newly initialized constant server link
   private ipUrl = `${LocalServer.ipAddUrl}/api/account/signup`
   private localUrl = `${LocalServer.localUrl}/api/account/signup`

  constructor() { }
}
