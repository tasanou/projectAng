import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pagePhoto: any;
  constructor(private http: HttpClient) {
    this.onSearch().subscribe(data => {
      this.pagePhoto = data;
      console.log(data);
    });
  }
  ngOnInit() { }

  onSearch(): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&per_page' );
  }
}
