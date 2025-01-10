import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoaneListComponent } from './telefoane-list.component';

describe('TelefoaneListComponent', () => {
  let component: TelefoaneListComponent;
  let fixture: ComponentFixture<TelefoaneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelefoaneListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelefoaneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
