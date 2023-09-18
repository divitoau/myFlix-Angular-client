import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserBoxComponent } from './delete-user-box.component';

describe('DeleteUserBoxComponent', () => {
  let component: DeleteUserBoxComponent;
  let fixture: ComponentFixture<DeleteUserBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteUserBoxComponent]
    });
    fixture = TestBed.createComponent(DeleteUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
