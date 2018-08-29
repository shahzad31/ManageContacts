import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonComponentsModule } from 'ht-common-components/dist';
import { ContactAddEditModule } from 'ht-contact-add-edit/dist';
import { ContactListModule } from 'ht-contact-list/dist';
import { RouterTestingModule } from '@angular/router/testing';
import { NewContactComponent } from './new-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';


describe('AddContactComponent', () => {
  let component: NewContactComponent;
  let fixture: ComponentFixture<NewContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ContactListModule,
        ContactAddEditModule,
        CommonComponentsModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({})
      ],
      declarations: [ NewContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have dynamic form', () => {
    component.ngOnInit();
    const hostElem = fixture.nativeElement;
    expect(hostElem.querySelector('ht-dynamic-form') instanceof HTMLElement).toBeTruthy();
  });
});
