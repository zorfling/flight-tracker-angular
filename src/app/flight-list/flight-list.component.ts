import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Flight, Status } from '../flight';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {
  flights: Flight[];

  constructor(private flightService: FlightService) {}

  getFlights() {
    this.flightService.getAirportFlights('BNE').subscribe(flights => {
      this.flights = flights.filter(flight => flight.status !== Status.Landed);
    });
  }
  ngOnInit() {
    this.getFlights();
  }
}
