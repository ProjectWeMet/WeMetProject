import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedProjectsComponent } from './published-projects.component';

describe('PublishedProjectsComponent', () => {
  let component: PublishedProjectsComponent;
  let fixture: ComponentFixture<PublishedProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishedProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
