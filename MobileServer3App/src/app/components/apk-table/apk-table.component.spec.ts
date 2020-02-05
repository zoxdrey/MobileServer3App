import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApkTableComponent } from './apk-table.component';

describe('ApkTableComponent', () => {
  let component: ApkTableComponent;
  let fixture: ComponentFixture<ApkTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApkTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
