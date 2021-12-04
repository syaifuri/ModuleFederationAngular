import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App02Component } from './app02.component';

describe('App02Component', () => {
  let component: App02Component;
  let fixture: ComponentFixture<App02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
