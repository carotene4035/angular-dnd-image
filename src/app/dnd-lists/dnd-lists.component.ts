import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnd-lists',
  templateUrl: './dnd-lists.component.html',
  styleUrls: ['./dnd-lists.component.css']
})
export class DndListsComponent implements OnInit {

  public partName1 = '全体';
  public partName2 = '柱脚部';
  public partName3 = '開口部';
  public partName4 = '一般部';
  public partName5 = '取付部';
  public partName6 = 'バンド部';

  constructor() { }

  ngOnInit() {
  }

}
