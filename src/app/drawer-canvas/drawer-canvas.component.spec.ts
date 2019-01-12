import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerCanvasComponent } from './drawer-canvas.component';

describe('DrawerCanvasComponent', () => {
  let component: DrawerCanvasComponent;
  let fixture: ComponentFixture<DrawerCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
