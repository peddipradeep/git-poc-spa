import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitFileSummaryDetailsComponent } from './git-file-summary-details.component';

describe('GitFileSummaryDetailsComponent', () => {
  let component: GitFileSummaryDetailsComponent;
  let fixture: ComponentFixture<GitFileSummaryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitFileSummaryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitFileSummaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
