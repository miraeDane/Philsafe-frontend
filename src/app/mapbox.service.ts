import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MAPBOX_ACCESS_TOKEN } from './mapbox-config';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {
  private map!: mapboxgl.Map;

  constructor() {}

  initializeMap(container: string, center: [number, number], zoom: number): mapboxgl.Map {
    this.map = new mapboxgl.Map({
      container: container,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center,
      zoom: 10,
      accessToken: MAPBOX_ACCESS_TOKEN
    });
    return this.map;
  }
}