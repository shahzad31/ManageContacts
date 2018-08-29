/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        this.enableSelection = true;
        this.displayedColumns = [];
        this.columns = [];
        this.selectionChange = new EventEmitter();
        this.sortedData = [];
        this.selection = new SelectionModel(true, []);
    }
    /**
     * @return {?}
     */
    DataTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.selection.onChange.subscribe(function (changes) {
            _this.selectionChange.emit(changes);
        });
    };
    /**
     * @param {?} filterValue
     * @return {?}
     */
    DataTableComponent.prototype.applyFilter = /**
     * @param {?} filterValue
     * @return {?}
     */
    function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    /**
     * @param {?} sort
     * @return {?}
     */
    DataTableComponent.prototype.sortData = /**
     * @param {?} sort
     * @return {?}
     */
    function (sort) {
        /** @type {?} */
        var data = this.dataSource.filteredData.slice();
        if (!sort.active || sort.direction === '') {
            return;
        }
        /** @type {?} */
        var sortedData = data.sort(function (a, b) {
            /** @type {?} */
            var isAsc = sort.direction === 'asc';
            /** @type {?} */
            var attr = sort.active;
            return compare(a[sort.active], b[sort.active], isAsc);
        });
        this.dataSource = new MatTableDataSource(sortedData || []);
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.isAllSelected = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var numSelected = this.selection.selected.length;
        /** @type {?} */
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    DataTableComponent.prototype.masterToggle = /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    DataTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ht-data-table',
                    template: "<div class=\"data-table-component\">\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n\n  <div class=\"mat-elevation-z8\">\n    <div class=\"spinner-container\" *ngIf=\"loading\">\n      <mat-spinner class=\"loading-spinner\"></mat-spinner>\n    </div>\n    <table *ngIf=\"!loading\"  mat-table [dataSource]=\"dataSource\"\n     matSort (matSortChange)=\"sortData($event)\">\n\n        <ng-container matColumnDef=\"select\">\n          <th mat-header-cell *matHeaderCellDef>\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n            </mat-checkbox>\n          </th>\n          <td mat-cell *matCellDef=\"let row\">\n            <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n            </mat-checkbox>\n          </td>\n        </ng-container>\n\n      <ng-container *ngFor=\"let col of columns\" [matColumnDef]=\"col.id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{col.label}} </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row[col.id]}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</div>",
                    styles: [".data-table-component,.data-table-component mat-form-field,.data-table-component table{width:100%}.data-table-component .spinner-container{display:flex;justify-content:center;height:200px;align-items:center}"]
                },] },
    ];
    /** @nocollapse */
    DataTableComponent.ctorParameters = function () { return []; };
    DataTableComponent.propDecorators = {
        data: [{ type: Input }],
        loading: [{ type: Input }],
        dataSource: [{ type: Input }],
        enableSelection: [{ type: Input }],
        displayedColumns: [{ type: Input }],
        columns: [{ type: Input }],
        selectionChange: [{ type: Output }],
        paginator: [{ type: ViewChild, args: [MatPaginator,] }],
        sort: [{ type: ViewChild, args: [MatSort,] }]
    };
    return DataTableComponent;
}());
export { DataTableComponent };
if (false) {
    /** @type {?} */
    DataTableComponent.prototype.data;
    /** @type {?} */
    DataTableComponent.prototype.loading;
    /** @type {?} */
    DataTableComponent.prototype.dataSource;
    /** @type {?} */
    DataTableComponent.prototype.enableSelection;
    /** @type {?} */
    DataTableComponent.prototype.displayedColumns;
    /** @type {?} */
    DataTableComponent.prototype.columns;
    /** @type {?} */
    DataTableComponent.prototype.selectionChange;
    /** @type {?} */
    DataTableComponent.prototype.sortedData;
    /** @type {?} */
    DataTableComponent.prototype.paginator;
    /** @type {?} */
    DataTableComponent.prototype.sort;
    /** @type {?} */
    DataTableComponent.prototype.selection;
}
/**
 * @param {?} a
 * @param {?} b
 * @param {?} isAsc
 * @return {?}
 */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9odC1jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBcUIsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBNER4RDsrQkFkMkIsSUFBSTtnQ0FFTyxFQUFFO3VCQUNkLEVBQUU7K0JBRW1CLElBQUksWUFBWSxFQUFFOzBCQUVwRCxFQUFFO3lCQUtILElBQUksY0FBYyxDQUFNLElBQUksRUFBRSxFQUFFLENBQUM7S0FHNUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQ3ZDLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BDLENBQUMsQ0FBQztLQUNKOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxXQUFtQjtRQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFMUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3ZDO0tBQ0Y7Ozs7O0lBQ0QscUNBQVE7Ozs7SUFBUixVQUFTLElBQVU7O1FBRWpCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUMsTUFBTSxDQUFDO1NBQ1I7O1FBRUQsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDOztZQUNoQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQzs7WUFDdkMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN2RCxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0JBQWtCLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQzVEOzs7O0lBQ0QsMENBQWE7OztJQUFiOztRQUNFLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7UUFDbkQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxXQUFXLEtBQUssT0FBTyxDQUFDO0tBQ2hDO0lBRUQsZ0ZBQWdGOzs7OztJQUNoRix5Q0FBWTs7OztJQUFaO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztLQUNuRTs7Z0JBckdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLHNqREFtQ0w7b0JBQ0wsTUFBTSxFQUFFLENBQUMsaU5BQWlOLENBQUM7aUJBQzVOOzs7Ozt1QkFFRSxLQUFLOzBCQUNMLEtBQUs7NkJBQ0wsS0FBSztrQ0FDTCxLQUFLO21DQUVMLEtBQUs7MEJBQ0wsS0FBSztrQ0FFTCxNQUFNOzRCQUlOLFNBQVMsU0FBQyxZQUFZO3VCQUN0QixTQUFTLFNBQUMsT0FBTzs7NkJBMURwQjs7U0E0Q2Esa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0UvQixpQkFBaUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLO0lBQzFCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRQYWdpbmF0b3IsIE1hdFNvcnQsIE1hdFRhYmxlRGF0YVNvdXJjZSwgU29ydCwgTWF0U29ydGFibGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2h0LWRhdGEtdGFibGUnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJkYXRhLXRhYmxlLWNvbXBvbmVudFwiPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IG1hdElucHV0IChrZXl1cCk9XCJhcHBseUZpbHRlcigkZXZlbnQudGFyZ2V0LnZhbHVlKVwiIHBsYWNlaG9sZGVyPVwiRmlsdGVyXCI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPGRpdiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1jb250YWluZXJcIiAqbmdJZj1cImxvYWRpbmdcIj5cbiAgICAgIDxtYXQtc3Bpbm5lciBjbGFzcz1cImxvYWRpbmctc3Bpbm5lclwiPjwvbWF0LXNwaW5uZXI+XG4gICAgPC9kaXY+XG4gICAgPHRhYmxlICpuZ0lmPVwiIWxvYWRpbmdcIiAgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIlxuICAgICBtYXRTb3J0IChtYXRTb3J0Q2hhbmdlKT1cInNvcnREYXRhKCRldmVudClcIj5cblxuICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInNlbGVjdFwiPlxuICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+XG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiJGV2ZW50ID8gbWFzdGVyVG9nZ2xlKCkgOiBudWxsXCIgW2NoZWNrZWRdPVwic2VsZWN0aW9uLmhhc1ZhbHVlKCkgJiYgaXNBbGxTZWxlY3RlZCgpXCIgW2luZGV0ZXJtaW5hdGVdPVwic2VsZWN0aW9uLmhhc1ZhbHVlKCkgJiYgIWlzQWxsU2VsZWN0ZWQoKVwiPlxuICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCI+XG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIiAoY2hhbmdlKT1cIiRldmVudCA/IHNlbGVjdGlvbi50b2dnbGUocm93KSA6IG51bGxcIiBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaXNTZWxlY3RlZChyb3cpXCI+XG4gICAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29sIG9mIGNvbHVtbnNcIiBbbWF0Q29sdW1uRGVmXT1cImNvbC5pZFwiPlxuICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4ge3tjb2wubGFiZWx9fSA8L3RoPlxuICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCI+IHt7cm93W2NvbC5pZF19fSA8L3RkPlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gICAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj5cbiAgICAgIDwvdHI+XG4gICAgPC90YWJsZT5cblxuICAgIDxtYXQtcGFnaW5hdG9yIFtwYWdlU2l6ZU9wdGlvbnNdPVwiWzUsIDEwLCAyNSwgMTAwXVwiPjwvbWF0LXBhZ2luYXRvcj5cbiAgPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLmRhdGEtdGFibGUtY29tcG9uZW50LC5kYXRhLXRhYmxlLWNvbXBvbmVudCBtYXQtZm9ybS1maWVsZCwuZGF0YS10YWJsZS1jb21wb25lbnQgdGFibGV7d2lkdGg6MTAwJX0uZGF0YS10YWJsZS1jb21wb25lbnQgLnNwaW5uZXItY29udGFpbmVye2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2hlaWdodDoyMDBweDthbGlnbi1pdGVtczpjZW50ZXJ9YF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGF0YTtcbiAgQElucHV0KCkgbG9hZGluZztcbiAgQElucHV0KCkgZGF0YVNvdXJjZTtcbiAgQElucHV0KCkgZW5hYmxlU2VsZWN0aW9uID0gdHJ1ZTtcblxuICBASW5wdXQoKSBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSBjb2x1bW5zOiBhbnlbXSA9IFtdO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHNvcnRlZERhdGEgPSBbXTtcblxuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcblxuICBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWw8YW55Pih0cnVlLCBbXSk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgdGhpcy5zZWxlY3Rpb24ub25DaGFuZ2Uuc3Vic2NyaWJlKGNoYW5nZXMgPT4ge1xuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChjaGFuZ2VzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGx5RmlsdGVyKGZpbHRlclZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyID0gZmlsdGVyVmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodGhpcy5kYXRhU291cmNlLnBhZ2luYXRvcikge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICB9XG4gIH1cbiAgc29ydERhdGEoc29ydDogU29ydCkge1xuXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJlZERhdGEuc2xpY2UoKTtcbiAgICBpZiAoIXNvcnQuYWN0aXZlIHx8IHNvcnQuZGlyZWN0aW9uID09PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNvcnRlZERhdGEgPSBkYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IGlzQXNjID0gc29ydC5kaXJlY3Rpb24gPT09ICdhc2MnO1xuICAgICAgY29uc3QgYXR0ciA9IHNvcnQuYWN0aXZlO1xuICAgICAgcmV0dXJuIGNvbXBhcmUoYVtzb3J0LmFjdGl2ZV0sIGJbc29ydC5hY3RpdmVdLCBpc0FzYyk7XG4gICAgfSk7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShzb3J0ZWREYXRhIHx8IFtdKTtcbiAgfVxuICBpc0FsbFNlbGVjdGVkKCkge1xuICAgIGNvbnN0IG51bVNlbGVjdGVkID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubGVuZ3RoO1xuICAgIGNvbnN0IG51bVJvd3MgPSB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGg7XG4gICAgcmV0dXJuIG51bVNlbGVjdGVkID09PSBudW1Sb3dzO1xuICB9XG5cbiAgLyoqIFNlbGVjdHMgYWxsIHJvd3MgaWYgdGhleSBhcmUgbm90IGFsbCBzZWxlY3RlZDsgb3RoZXJ3aXNlIGNsZWFyIHNlbGVjdGlvbi4gKi9cbiAgbWFzdGVyVG9nZ2xlKCkge1xuICAgIHRoaXMuaXNBbGxTZWxlY3RlZCgpID9cbiAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCkgOlxuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEuZm9yRWFjaChyb3cgPT4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0KHJvdykpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYiwgaXNBc2MpIHtcbiAgcmV0dXJuIChhIDwgYiA/IC0xIDogMSkgKiAoaXNBc2MgPyAxIDogLTEpO1xufVxuIl19