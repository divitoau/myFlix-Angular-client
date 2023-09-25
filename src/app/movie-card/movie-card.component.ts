import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FetchApiDataService } from '../fetch-api-data.service';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent implements OnInit {

  movies: any[] = []
  userFavIDs: any[] = []

  constructor(
    public dialog: MatDialog,
    public fetchApiData: FetchApiDataService
  ) { }

  ngOnInit(): void {
    this.getMovies();
    this.getUserFavIDs();
  }

  getUserFavIDs(): void {
    let userString: any = localStorage.getItem("user")
    this.userFavIDs = JSON.parse(userString).FavoriteMovies
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      return this.movies;
    });
  }

  openInfoDialog(header: any, content: any): void {
    this.dialog.open(InfoDialogComponent, {
      data: {
        header: header,
        content: content
      },
      width: '280px'
    });
  }

  addToFavorites(movieID: string): void {
    this.fetchApiData.addFavoriteMovie(movieID).then((response) => {
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response));
      this.userFavIDs = response.FavoriteMovies
    });
  }

  removeFromFavorites(movieID: string): void {
    this.fetchApiData.removeFavoriteMovie(movieID).subscribe((response) => {
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response));
      this.userFavIDs = response.FavoriteMovies
    }, (response) => {
      console.log(response);
    });
  }
}
