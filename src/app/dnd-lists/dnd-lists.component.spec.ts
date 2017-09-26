import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndListsComponent } from './dnd-lists.component';

describe('DndListsComponent', () => {
  let component: DndListsComponent;
  let fixture: ComponentFixture<DndListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
