import { Component, OnInit } from '@angular/core';
import { MapboxService } from '../mapbox.service';

@Component({
  selector: 'app-crime-map',
  templateUrl: './crime-map.component.html',
  styleUrls: ['./crime-map.component.css']
})
export class CrimeMapComponent implements OnInit {
  constructor(private mapboxService: MapboxService) {}

  ngOnInit(): void {
    this.mapboxService.initializeMap('map', [123.8854, 10.6079], 12);
  }
}