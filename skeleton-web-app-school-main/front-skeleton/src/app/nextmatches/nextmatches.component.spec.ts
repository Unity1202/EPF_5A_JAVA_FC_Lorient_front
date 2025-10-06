import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextmatchesComponent } from './nextmatches.component';

describe('NextmatchesComponent', () => {
  let component: NextmatchesComponent;
  let fixture: ComponentFixture<NextmatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextmatchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextmatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
