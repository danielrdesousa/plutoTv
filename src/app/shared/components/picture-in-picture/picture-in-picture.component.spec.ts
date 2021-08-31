import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureInPictureComponent } from './picture-in-picture.component';

describe('PictureInPictureComponent', () => {
  let component: PictureInPictureComponent;
  let fixture: ComponentFixture<PictureInPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureInPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureInPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
