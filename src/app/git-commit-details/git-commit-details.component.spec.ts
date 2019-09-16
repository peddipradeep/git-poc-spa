import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCommitDetailsComponent } from './git-commit-details.component';

describe('GitCommitDetailsComponent', () => {
  let component: GitCommitDetailsComponent;
  let fixture: ComponentFixture<GitCommitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitCommitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitCommitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
