import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenGuideComponent } from './open-guide.component';

describe('OpenGuideComponent', () => {
  let component: OpenGuideComponent;
  let fixture: ComponentFixture<OpenGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
