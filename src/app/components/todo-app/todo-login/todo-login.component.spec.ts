import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLoginComponent } from './todo-login.component';

describe('TodoLoginComponent', () => {
  let component: TodoLoginComponent;
  let fixture: ComponentFixture<TodoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
