import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'flight-tracker';

  flights = [
    {
      callsign: 'Flight 1',
      arrival: '12:00:00'
    },
    {
      callsign: 'Flight 2',
      arrival: '13:00:00'
    },
    {
      callsign: 'Flight 3',
      arrival: '14:00:00'
    }
  ];

  constructor() {}

  getData() {
    let headers = new Headers();
    const username = 'zorfling';
    const password = 'opensky';
    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));

    const begin = Math.floor(
      (new Date().getTime() - 60 * 60 * 8 * 1000) / 1000
    );
    const end = Math.floor((new Date().getTime() + 60 * 60 * 1 * 1000) / 1000);

    const data = fetch(
      `https://opensky-network.org/api/flights/arrival?airport=YBBN&begin=${begin}&end=${end}`,
      { headers }
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        return myJson.map(elem => ({
          callsign: elem.callsign,
          lastSeen: new Date(elem.lastSeen * 1000),
          from: elem.estDepartureAirport
        }));
      });

    return data;
  }

  async ngOnInit() {
    this.flights = await this.getData();
  }
}
