import { Component, OnInit } from '@angular/core';
import { MapboxService } from '../mapbox.service';

@Component({
  selector: 'app-station-crime-map',
  templateUrl: './station-crime-map.component.html',
  styleUrls: ['./station-crime-map.component.css']
})
export class StationCrimeMapComponent implements OnInit {
  constructor(private mapboxService: MapboxService) {}

  ngOnInit(): void {
    this.mapboxService.initializeMap('map', [123.8854, 10.6079], 12);
  }
}