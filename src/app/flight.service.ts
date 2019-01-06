import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Flight } from './flight';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  params: new HttpParams().set('key', '247031-cad766')
};

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private flightsUrl = 'http://aviation-edge.com/v2/public/';
  private apiKey = '247031-cad766';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getAirportFlights(airportIata): Observable<Flight[]> {
    const url = `${this.flightsUrl}timetable`;
    httpOptions.params = httpOptions.params
      .set('iataCode', airportIata)
      .set('type', 'arrival');
    return this.http
      .get<Flight[]>(url, httpOptions)
      .pipe(catchError(this.handleError<any>('getAirportFlights')));
  }

  private log(message: string) {
    this.messageService.add(`FlightService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
