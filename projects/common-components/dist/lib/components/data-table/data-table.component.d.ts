import { OnInit, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, Sort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
export declare class DataTableComponent implements OnInit {
    data: any;
    loading: any;
    dataSource: any;
    enableSelection: boolean;
    displayedColumns: string[];
    columns: any[];
    selectionChange: EventEmitter<any>;
    sortedData: any[];
    paginator: MatPaginator;
    sort: MatSort;
    selection: SelectionModel<any>;
    constructor();
    ngOnInit(): void;
    applyFilter(filterValue: string): void;
    sortData(sort: Sort): void;
    isAllSelected(): boolean;
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle(): void;
}
