import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FetchApiDataService } from '../fetch-api-data.service';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent implements OnInit {

  favMovies: any[] = []

  constructor(
    public dialog: MatDialog,
    public fetchApiData: FetchApiDataService
  ) { }

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

  openInfoDialog(header: any, content: any): void {
    this.dialog.open(InfoDialogComponent, {
      data: {
        header: header,
        content: content
      },
      width: '280px'
    });
  }
}

