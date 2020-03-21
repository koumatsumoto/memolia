import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatabaseService } from '../../service/database.service';
import { ViewTermsComponent } from './view-terms.component';

describe('ViewTermsComponent', () => {
  let component: ViewTermsComponent;
  let fixture: ComponentFixture<ViewTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTermsComponent],
      providers: [
        {
          provide: DatabaseService,
          useValue: {},
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
