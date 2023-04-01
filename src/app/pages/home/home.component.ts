import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any = [];

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    //ceci va créer un observable auquel on souscrit récupérer via le service movies
    this.moviesService.getMovies().subscribe((res: any) => {
      this.movies = res.results; // assigne le resultat de la requete a la variable movies
    });
  }

}
