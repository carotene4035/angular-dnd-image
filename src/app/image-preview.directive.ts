import {
  Directive,
  ElementRef,
  Input,
  Renderer,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: 'img[imgPreview]'
})
export class ImagePreviewDirective {
  @Input() image: any;
  @Input() uploader: any;

  /** 部位コード */
  @Input() partCode: number;

  constructor(
    // dom操作のためのモジュール
    private el: ElementRef,
    private renderer: Renderer
  ) {}


  ngOnChanges(changes: SimpleChanges) {

    console.log(changes);

    // html5のapi file reader
    let reader = new FileReader();
    // elはimagePreviewのdom
    let el = this.el;

    /**
     * form data生成
     */
    let formData :FormData = new FormData();
    formData.append('test', this.image);

    /**
     * ajaxでデータを送ってレスポンスを受け取る
     * 受け取ったレスポンスをモデルに格納
     */

    /* uploaderから画像を削除する */

    /*
     * サムネイルの表示
     */
    reader.onloadend = function (e) {
      el.nativeElement.src = reader.result;
    };
    if (this.image) {
      console.log(this.image);
      // ここでblobに変更してimg srcにバインド
      return reader.readAsDataURL(this.image);
    }

  }
}
