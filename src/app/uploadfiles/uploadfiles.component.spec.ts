import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadfilesComponent } from './uploadfiles.component';

describe('UploadfilesComponent', () => {
  let component: UploadfilesComponent;
  let fixture: ComponentFixture<UploadfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
