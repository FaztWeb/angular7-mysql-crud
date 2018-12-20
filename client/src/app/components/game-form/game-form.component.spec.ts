import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFormComponent } from './game-form.component';

describe('GameFormComponent', () => {
  let component: GameFormComponent;
  let fixture: ComponentFixture<GameFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
