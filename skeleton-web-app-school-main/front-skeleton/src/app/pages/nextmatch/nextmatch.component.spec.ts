import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextmatchComponent } from './nextmatch.component';

describe('NextmatchComponent', () => {
  let component: NextmatchComponent;
  let fixture: ComponentFixture<NextmatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextmatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
