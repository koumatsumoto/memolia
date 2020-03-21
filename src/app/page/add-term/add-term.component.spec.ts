import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DatabaseService } from '../../service/database.service';
import { AddTermComponent } from './add-term.component';

describe('AddTermComponent', () => {
  let component: AddTermComponent;
  let fixture: ComponentFixture<AddTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTermComponent],
      providers: [
        {
          provide: DatabaseService,
          useValue: {},
        },
        {
          provide: Router,
          useValue: {},
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
