import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pagePhoto: any;
  size = 10 ;
  curPage = 1;
  pageOfItems: Array<number>;
   totalPages: number;
  constructor(private http: HttpClient) {
    this.onSearch().subscribe(data => {
      this.pagePhoto = data;
      console.log(data);
      this.totalPages = data.total_count / this.size;
      if (data.total_count % this.size !== 0) {
        ++this.totalPages;
      }
      this.pageOfItems = new Array(this.totalPages);
    });
  }
  ngOnInit() { }

  onSearch(): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&per_page=' + this.size + '&page=' + this.curPage);
  }
}
