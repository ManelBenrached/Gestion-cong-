import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Demande } from '../model/demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  API_GET_DEMANDE = "/conges";
  SING_DEMANDE = "/conges/{id}";
  USER_DEMANDE ="/conges/list_conges_user_connect";
  private demande: Observable<Demande[]>;

  constructor(private http: HttpClient) { }

  public getdemandes(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + this.API_GET_DEMANDE);
  }
  public getuserdemande(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + this.USER_DEMANDE);
  }

  public addconge(data: any): Observable<any> {
    return this.http.post<Demande>(environment.apiUrl + this.API_GET_DEMANDE, data);
  }



  public viewDemande(id: any): Observable<Demande> {
    return this.http.get<Demande>(environment.apiUrl + this.SING_DEMANDE); // return an observable
  }
  getById(id: any): Observable<Demande> {
    return this.http.get<Demande>(environment.apiUrl + '/demandes/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
