import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaComponent } from './villa.component';

describe('VillaComponent', () => {
  let component: VillaComponent;
  let fixture: ComponentFixture<VillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
