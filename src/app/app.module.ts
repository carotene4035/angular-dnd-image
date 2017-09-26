import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DndModule } from 'ng2-dnd';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImagePreviewDirective } from './image-preview.directive';
import { DndDirective } from './dnd.directive';
import { DndListsComponent } from './dnd-lists/dnd-lists.component';
import { DndComponent } from './dnd/dnd.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagePreviewDirective,
    DndDirective,
    DndListsComponent,
    DndComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
