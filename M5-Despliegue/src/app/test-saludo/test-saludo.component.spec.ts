import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSaludoComponent } from './test-saludo.component';

describe('TestSaludoComponent', () => {
  let component: TestSaludoComponent;
  let fixture: ComponentFixture<TestSaludoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSaludoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSaludoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
