import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjrctComponent } from './project.component';

describe('ProjrctComponent', () => {
  let component: ProjrctComponent;
  let fixture: ComponentFixture<ProjrctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjrctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjrctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
