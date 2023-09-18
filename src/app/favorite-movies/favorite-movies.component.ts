import { Component } from '@angular/core';

import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent {

  favMovies: any[] = []

  constructor(public fetchApiData: FetchApiDataService) { }

  ngOnInit(): void {
    this.getFavMovies();
  }

  getFavMovies(): void {
    let userString: any = localStorage.getItem("user")
    let userFavIDs: any = JSON.parse(userString).FavoriteMovies

    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.favMovies = resp.filter((movie: any) => userFavIDs.includes(movie._id))
      return this.favMovies;
    });
  }
}

