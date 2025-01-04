/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed, } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TelefoaneDetaliiComponent } from './telefoane-detalii.component';

describe('TelefoaneDetaliiComponent', () => {
  let component: TelefoaneDetaliiComponent;
  let fixture: ComponentFixture<TelefoaneDetaliiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefoaneDetaliiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoaneDetaliiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
