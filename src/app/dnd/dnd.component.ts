import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.css']
})
export class DndComponent implements OnInit {
  @Input() partCode: string;
  @Input() partName: string;

  images: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  /** ドロップ成功時にここが見える */
  transferDataSuccess($event: any) {
    console.log($event.mouseEvent.dataTransfer);

    /** これだけで、ファイルの情報を取得することができるのか。。 */
    console.log($event.mouseEvent.dataTransfer.files);
    console.log($event.mouseEvent.dataTransfer.files[0]);

    let image = $event.mouseEvent.dataTransfer.files[0];
    this.images.push(image);

//    /**
//     * form data生成
//     */
//    let formData :FormData = new FormData();
//    formData.append('test', this.image);
//
//    /**
//     * ajaxでデータを送ってレスポンスを受け取る
//     * 受け取ったレスポンスをモデルに格納
//     */
//
//    /* uploaderから画像を削除する */

  }
}
