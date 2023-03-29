import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleDialogComponent } from './salle-dialog.component';

describe('SalleDialogComponent', () => {
  let component: SalleDialogComponent;
  let fixture: ComponentFixture<SalleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalleDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
