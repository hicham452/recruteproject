import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageCandidateComponent } from './admin-manage-candidate.component';

describe('AdminManageCandidateComponent', () => {
  let component: AdminManageCandidateComponent;
  let fixture: ComponentFixture<AdminManageCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManageCandidateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminManageCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
