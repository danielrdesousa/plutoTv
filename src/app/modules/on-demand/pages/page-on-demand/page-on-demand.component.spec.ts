import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOnDemandComponent } from './page-on-demand.component';

describe('PageOnDemandComponent', () => {
  let component: PageOnDemandComponent;
  let fixture: ComponentFixture<PageOnDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOnDemandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOnDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
