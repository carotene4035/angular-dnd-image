import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Http, Response } from '@angular/http';
const URL = 'http://**';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent implements OnInit {

  public uploader1: FileUploader
  = new FileUploader({url: `YOUR URL`});

  public uploader2: FileUploader
  = new FileUploader({url: `YOUR URL`});

  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  ngOnInit()
  {
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  public click()
  {
    console.log(this.uploader1);
  }

  test(e)
  {
    console.log(e);
  }

  constructor(private http: Http, private el: ElementRef)
  {
  }

  upload()
  {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector("#photo");
  }

}
