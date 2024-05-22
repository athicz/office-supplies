// Import necessary modules
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplies } from '../search/interface/interface.search';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:9000/'; // Change the URL to match your Java Spring Boot API

  constructor(private http: HttpClient) { }

  // Example method to fetch data from the API
  fetchData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' // Include the CORS header
    });
    const options = { headers: headers };
    return this.http.get<any>(`${this.baseUrl}search`, options);
  }

  fetchDataAll(query: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' // Include the CORS header
    });
    const options = { headers: headers };
    return this.http.post<any>(`${this.baseUrl}searchAll`, { query }, options);
  }

  addData(query: Supplies): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' // Include the CORS header
    });
    const options = { headers: headers };
    return this.http.post<any>(`${this.baseUrl}addSupplies`, query, options);
  }

  updateData(query: Supplies): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.post<any>(`${this.baseUrl}updateSupplies`, query, options);
  }

  login(userName:string, password:string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.post<any>(`${this.baseUrl}login`, {userName, password}, options);
  }

  create(userName:string, password:string, name:string, status:string, createDate:Date, updateDate:Date): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers };
    return this.http.post<any>(`${this.baseUrl}create`, {userName, password, name, status, createDate, updateDate}, options);
  }
}
