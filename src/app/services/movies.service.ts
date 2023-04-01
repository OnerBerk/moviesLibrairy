import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as http from 'http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {
  }

  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=66da49af722c2ac91e97ef5d92fef385');
  }
}
