import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauDialogComponent } from './bureau-dialog.component';

describe('BureauDialogComponent', () => {
  let component: BureauDialogComponent;
  let fixture: ComponentFixture<BureauDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BureauDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BureauDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
