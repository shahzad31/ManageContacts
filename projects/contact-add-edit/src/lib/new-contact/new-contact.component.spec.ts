import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { CommonComponentsModule } from 'ht-common-components/dist';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewContactComponent } from './new-contact.component';

describe('NewContactComponent', () => {
  let component: NewContactComponent;
  let fixture: ComponentFixture<NewContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        CommonComponentsModule
      ],
      declarations: [NewContactComponent]
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

  it('should have save button', () => {
    const hostElem = fixture.nativeElement;
    expect(hostElem.querySelector('button').textContent).toBe('Save');
  });

  it('on contact save should return promise', () => {
    const promise = component.onContactSave({ name: 'test' });
    expect(promise instanceof Promise).toBeTruthy();
  });

});
