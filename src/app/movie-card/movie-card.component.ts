import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FetchApiDataService } from '../fetch-api-data.service';
import { SynopsisDialogComponent } from '../synopsis-dialog/synopsis-dialog.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent implements OnInit {

  movies: any[] = []

  constructor(
    public dialog: MatDialog,
    public fetchApiData: FetchApiDataService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      return this.movies;
    });
  }

  openSynopsisDialog(header: any, content: any): void {
    this.dialog.open(SynopsisDialogComponent, {
      data: {
        header: header,
        content: content
      },
      width: '280px'
    });
  }
}
