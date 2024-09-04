import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod3FormsComponent } from './mod3-forms.component';

describe('Mod3FormsComponent', () => {
  let component: Mod3FormsComponent;
  let fixture: ComponentFixture<Mod3FormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod3FormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod3FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
