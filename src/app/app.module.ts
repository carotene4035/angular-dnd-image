import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {
  FileDropDirective,
  FileSelectDirective
} from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { ImagePreviewDirective } from './image-preview.directive';

@NgModule({
  declarations: [
    AppComponent,
    FileDropDirective,
    FileSelectDirective,
    ImagePreviewDirective
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
