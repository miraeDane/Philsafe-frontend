import { Component, OnInit } from '@angular/core';
import { MapboxService } from '../mapbox.service';

@Component({
  selector: 'app-plot-longitude-and-latitude',
  templateUrl: './plot-longitude-and-latitude.component.html',
  styleUrls: ['./plot-longitude-and-latitude.component.css']
})
export class PlotLongitudeAndLatitudeComponent implements OnInit {
  constructor(private mapboxService: MapboxService) {}

  ngOnInit(): void {
    this.mapboxService.initializeMap('map', [123.936507, 10.316780], 12);
  }
}