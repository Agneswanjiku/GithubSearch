import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputTextSelectionComponent } from './imput-text-selection.component';

describe('ImputTextSelectionComponent', () => {
  let component: ImputTextSelectionComponent;
  let fixture: ComponentFixture<ImputTextSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImputTextSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImputTextSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
