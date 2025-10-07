import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProchainMatchComponent } from './prochain-match.component';

describe('ProchainMatchComponent', () => {
  let component: ProchainMatchComponent;
  let fixture: ComponentFixture<ProchainMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProchainMatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProchainMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
