import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  errorHandler(error: any) {
    return error;
  }
  
  getElements(page: number, slug: string): Observable<any> {
    return this.http.get(this.apiUrl + slug + '?_page=' + page, { observe: 'response' }).pipe(catchError(
      this.errorHandler(e => {
        return of([e.status, e]);
      })
    ));
  }

  addElement(character: {}, slug: string): Observable<any> {
    return this.http.post(this.apiUrl + slug, character, { headers: {'Content-Type':'application/json' }} ).pipe(catchError(
      this.errorHandler(e => {
        return of([e.status, e]);
      })
    ));
  }

  removeElement(id: number, slug: string): Observable<any> {
    return this.http.delete(this.apiUrl + slug + '/' + id, { headers: {'Content-Type':'application/json' }} ).pipe(catchError(
      this.errorHandler(e => {
        return of([e.status, e]);
      })
    ));
  }

  getSpecies(): Observable<any> {
    return this.http.get(this.apiUrl + '/species').pipe(catchError(
      this.errorHandler(e => {
        return of([e.status, e]);
      })
    ));
  }

  find(q, page, slug) {
    return this.http.get(this.apiUrl + slug + '?q=' + q + '&_page=' + page, { observe: 'response' });
  }
}
