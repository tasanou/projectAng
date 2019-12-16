import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent, JwPaginationComponent
  ],
    imports: [
        BrowserModule,
        FormsModule, HttpClientModule, BrowserAnimationsModule, FlexLayoutModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule, AngularFontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
