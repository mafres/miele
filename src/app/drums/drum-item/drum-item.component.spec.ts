import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumItemComponent } from './drum-item.component';

describe('DrumItemComponent', () => {
  let component: DrumItemComponent;
  let fixture: ComponentFixture<DrumItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrumItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
