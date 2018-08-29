import { Component, OnInit, ViewChild, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, Sort, MatSortable } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'ht-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() data;
  @Input() loading;
  @Input() dataSource;
  @Input() enableSelection = true;

  @Input() displayedColumns: string[] = [];
  @Input() columns: any[] = [];

  @Output() selectionChange: EventEmitter<any> = new EventEmitter();

  sortedData = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  selection = new SelectionModel<any>(true, []);

  constructor() {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.selection.onChange.subscribe(changes => {
      this.selectionChange.emit(changes);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  sortData(sort: Sort) {

    const data = this.dataSource.filteredData.slice();
    if (!sort.active || sort.direction === '') {
      return;
    }

    const sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      const attr = sort.active;
      return compare(a[sort.active], b[sort.active], isAsc);
    });
    this.dataSource = new MatTableDataSource(sortedData || []);
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
