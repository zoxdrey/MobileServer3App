import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApkFileUploadModalComponent } from './apk-file-upload-modal.component';

describe('ApkFileUploadModalComponent', () => {
  let component: ApkFileUploadModalComponent;
  let fixture: ComponentFixture<ApkFileUploadModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApkFileUploadModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApkFileUploadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
