import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTvComponent } from './live-tv.component';

describe('LiveTvComponent', () => {
  let component: LiveTvComponent;
  let fixture: ComponentFixture<LiveTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
