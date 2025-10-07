import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeJoueursComponent } from './liste-joueurs.component';

describe('ListeJoueursComponent', () => {
  let component: ListeJoueursComponent;
  let fixture: ComponentFixture<ListeJoueursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeJoueursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeJoueursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
