import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryPageComponent } from './try-page.component';

describe('TryPageComponent', () => {
  let component: TryPageComponent;
  let fixture: ComponentFixture<TryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
