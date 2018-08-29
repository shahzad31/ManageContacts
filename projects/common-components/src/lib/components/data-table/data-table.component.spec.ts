import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponent } from './data-table.component';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<TestDataTableWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
      ],
      declarations: [DataTableComponent, TestDataTableWrapperComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDataTableWrapperComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one row', () => {
    component.ngOnInit();
    const hostElem = fixture.nativeElement;
    expect(hostElem.querySelector('table tbody tr') instanceof HTMLElement).toBeTruthy();
  });
});

@Component({
  selector: 'ht-test-data-table',
  template: '<ht-data-table [columns] = "columns" [dataSource]="dataSource"></ht-data-table>',
})
class TestDataTableWrapperComponent {
  dataSource: any = {};
  constructor() {
    const data = [{
      id: 1,
      name: 'test'
    }];
    const columns = [
      { id: 'id', label: 'ID' }
    ];
    this.dataSource = new MatTableDataSource(data);
  }
}
