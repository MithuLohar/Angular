import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerIdComponent } from './player-id.component';

describe('PlayerIdComponent', () => {
  let component: PlayerIdComponent;
  let fixture: ComponentFixture<PlayerIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
