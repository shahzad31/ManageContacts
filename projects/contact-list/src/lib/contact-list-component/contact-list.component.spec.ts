import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ContactListComponent } from './contact-list.component';
import { CommonComponentsModule } from 'ht-common-components/dist';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('ViewContactsComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        BrowserAnimationsModule,
        MaterialModule,
        CommonComponentsModule
      ],
      declarations: [ContactListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain data source', () => {
    expect(component.dataSource).toBeTruthy();
  });

  it('it should contain data table', () => {
    const listElem: HTMLElement = fixture.nativeElement;
    expect(listElem.querySelector('ht-data-table') instanceof HTMLElement).toBeTruthy();
  });

  it('change filter value', () => {
    const hostElement = fixture.nativeElement;
    const filterInput: HTMLInputElement = hostElement.querySelector('input');

    filterInput.value = 'a';

    // dispatch a DOM event so that Angular learns of input value change.
    filterInput.dispatchEvent(new Event('input'));

    // Tell Angular to update the display binding through the title pipe
    fixture.detectChanges();

    expect(filterInput.value).toBe('a');
  });
});
