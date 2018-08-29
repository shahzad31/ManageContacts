/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
export class DataTableComponent {
    constructor() {
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
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.selection.onChange.subscribe(changes => {
            this.selectionChange.emit(changes);
        });
    }
    /**
     * @param {?} filterValue
     * @return {?}
     */
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    /**
     * @param {?} sort
     * @return {?}
     */
    sortData(sort) {
        /** @type {?} */
        const data = this.dataSource.filteredData.slice();
        if (!sort.active || sort.direction === '') {
            return;
        }
        /** @type {?} */
        const sortedData = data.sort((a, b) => {
            /** @type {?} */
            const isAsc = sort.direction === 'asc';
            /** @type {?} */
            const attr = sort.active;
            return compare(a[sort.active], b[sort.active], isAsc);
        });
        this.dataSource = new MatTableDataSource(sortedData || []);
    }
    /**
     * @return {?}
     */
    isAllSelected() {
        /** @type {?} */
        const numSelected = this.selection.selected.length;
        /** @type {?} */
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }
}
DataTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ht-data-table',
                template: `<div class="data-table-component">
  <mat-form-field>
    <input matInput (keyup)="applyFilter($event.target.value)" placeholder="Filter">
  </mat-form-field>

  <div class="mat-elevation-z8">
    <div class="spinner-container" *ngIf="loading">
      <mat-spinner class="loading-spinner"></mat-spinner>
    </div>
    <table *ngIf="!loading"  mat-table [dataSource]="dataSource"
     matSort (matSortChange)="sortData($event)">

        <ng-container matColumnDef="select">
          <th mat-header-cell *matHeaderCellDef>
            <mat-checkbox (change)="$event ? masterToggle() : null" [checked]="selection.hasValue() && isAllSelected()" [indeterminate]="selection.hasValue() && !isAllSelected()">
            </mat-checkbox>
          </th>
          <td mat-cell *matCellDef="let row">
            <mat-checkbox (click)="$event.stopPropagation()" (change)="$event ? selection.toggle(row) : null" [checked]="selection.isSelected(row)">
            </mat-checkbox>
          </td>
        </ng-container>

      <ng-container *ngFor="let col of columns" [matColumnDef]="col.id">
        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{col.label}} </th>
        <td mat-cell *matCellDef="let row"> {{row[col.id]}} </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;">
      </tr>
    </table>

    <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator>
  </div>
</div>`,
                styles: [`.data-table-component,.data-table-component mat-form-field,.data-table-component table{width:100%}.data-table-component .spinner-container{display:flex;justify-content:center;height:200px;align-items:center}`]
            },] },
];
/** @nocollapse */
DataTableComponent.ctorParameters = () => [];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9odC1jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBcUIsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUEwQzFELE1BQU07SUFrQko7K0JBZDJCLElBQUk7Z0NBRU8sRUFBRTt1QkFDZCxFQUFFOytCQUVtQixJQUFJLFlBQVksRUFBRTswQkFFcEQsRUFBRTt5QkFLSCxJQUFJLGNBQWMsQ0FBTSxJQUFJLEVBQUUsRUFBRSxDQUFDO0tBRzVDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQsV0FBVyxDQUFDLFdBQW1CO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUUxRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDdkM7S0FDRjs7Ozs7SUFDRCxRQUFRLENBQUMsSUFBVTs7UUFFakIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUM7U0FDUjs7UUFFRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUNwQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQzs7WUFDdkMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN2RCxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0JBQWtCLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQzVEOzs7O0lBQ0QsYUFBYTs7UUFDWCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7O1FBQ25ELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QyxNQUFNLENBQUMsV0FBVyxLQUFLLE9BQU8sQ0FBQztLQUNoQzs7Ozs7SUFHRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDbkU7OztZQXJHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQ0w7Z0JBQ0wsTUFBTSxFQUFFLENBQUMsaU5BQWlOLENBQUM7YUFDNU47Ozs7O21CQUVFLEtBQUs7c0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7K0JBRUwsS0FBSztzQkFDTCxLQUFLOzhCQUVMLE1BQU07d0JBSU4sU0FBUyxTQUFDLFlBQVk7bUJBQ3RCLFNBQVMsU0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtEcEIsaUJBQWlCLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSztJQUMxQixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yLCBNYXRTb3J0LCBNYXRUYWJsZURhdGFTb3VyY2UsIFNvcnQsIE1hdFNvcnRhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdodC1kYXRhLXRhYmxlJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZGF0YS10YWJsZS1jb21wb25lbnRcIj5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCBtYXRJbnB1dCAoa2V5dXApPVwiYXBwbHlGaWx0ZXIoJGV2ZW50LnRhcmdldC52YWx1ZSlcIiBwbGFjZWhvbGRlcj1cIkZpbHRlclwiPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDxkaXYgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItY29udGFpbmVyXCIgKm5nSWY9XCJsb2FkaW5nXCI+XG4gICAgICA8bWF0LXNwaW5uZXIgY2xhc3M9XCJsb2FkaW5nLXNwaW5uZXJcIj48L21hdC1zcGlubmVyPlxuICAgIDwvZGl2PlxuICAgIDx0YWJsZSAqbmdJZj1cIiFsb2FkaW5nXCIgIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCJcbiAgICAgbWF0U29ydCAobWF0U29ydENoYW5nZSk9XCJzb3J0RGF0YSgkZXZlbnQpXCI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzZWxlY3RcIj5cbiAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cIiRldmVudCA/IG1hc3RlclRvZ2dsZSgpIDogbnVsbFwiIFtjaGVja2VkXT1cInNlbGVjdGlvbi5oYXNWYWx1ZSgpICYmIGlzQWxsU2VsZWN0ZWQoKVwiIFtpbmRldGVybWluYXRlXT1cInNlbGVjdGlvbi5oYXNWYWx1ZSgpICYmICFpc0FsbFNlbGVjdGVkKClcIj5cbiAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCIgKGNoYW5nZSk9XCIkZXZlbnQgPyBzZWxlY3Rpb24udG9nZ2xlKHJvdykgOiBudWxsXCIgW2NoZWNrZWRdPVwic2VsZWN0aW9uLmlzU2VsZWN0ZWQocm93KVwiPlxuICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbCBvZiBjb2x1bW5zXCIgW21hdENvbHVtbkRlZl09XCJjb2wuaWRcIj5cbiAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IHt7Y29sLmxhYmVsfX0gPC90aD5cbiAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPiB7e3Jvd1tjb2wuaWRdfX0gPC90ZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICAgICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+XG4gICAgICA8L3RyPlxuICAgIDwvdGFibGU+XG5cbiAgICA8bWF0LXBhZ2luYXRvciBbcGFnZVNpemVPcHRpb25zXT1cIls1LCAxMCwgMjUsIDEwMF1cIj48L21hdC1wYWdpbmF0b3I+XG4gIDwvZGl2PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5kYXRhLXRhYmxlLWNvbXBvbmVudCwuZGF0YS10YWJsZS1jb21wb25lbnQgbWF0LWZvcm0tZmllbGQsLmRhdGEtdGFibGUtY29tcG9uZW50IHRhYmxle3dpZHRoOjEwMCV9LmRhdGEtdGFibGUtY29tcG9uZW50IC5zcGlubmVyLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjtoZWlnaHQ6MjAwcHg7YWxpZ24taXRlbXM6Y2VudGVyfWBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRhdGE7XG4gIEBJbnB1dCgpIGxvYWRpbmc7XG4gIEBJbnB1dCgpIGRhdGFTb3VyY2U7XG4gIEBJbnB1dCgpIGVuYWJsZVNlbGVjdGlvbiA9IHRydWU7XG5cbiAgQElucHV0KCkgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgY29sdW1uczogYW55W10gPSBbXTtcblxuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBzb3J0ZWREYXRhID0gW107XG5cbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XG5cbiAgc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsPGFueT4odHJ1ZSwgW10pO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgIHRoaXMuc2VsZWN0aW9uLm9uQ2hhbmdlLnN1YnNjcmliZShjaGFuZ2VzID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoY2hhbmdlcyk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBseUZpbHRlcihmaWx0ZXJWYWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLmZpbHRlciA9IGZpbHRlclZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IuZmlyc3RQYWdlKCk7XG4gICAgfVxuICB9XG4gIHNvcnREYXRhKHNvcnQ6IFNvcnQpIHtcblxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyZWREYXRhLnNsaWNlKCk7XG4gICAgaWYgKCFzb3J0LmFjdGl2ZSB8fCBzb3J0LmRpcmVjdGlvbiA9PT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzb3J0ZWREYXRhID0gZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBpc0FzYyA9IHNvcnQuZGlyZWN0aW9uID09PSAnYXNjJztcbiAgICAgIGNvbnN0IGF0dHIgPSBzb3J0LmFjdGl2ZTtcbiAgICAgIHJldHVybiBjb21wYXJlKGFbc29ydC5hY3RpdmVdLCBiW3NvcnQuYWN0aXZlXSwgaXNBc2MpO1xuICAgIH0pO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2Uoc29ydGVkRGF0YSB8fCBbXSk7XG4gIH1cbiAgaXNBbGxTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBudW1TZWxlY3RlZCA9IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aDtcbiAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoO1xuICAgIHJldHVybiBudW1TZWxlY3RlZCA9PT0gbnVtUm93cztcbiAgfVxuXG4gIC8qKiBTZWxlY3RzIGFsbCByb3dzIGlmIHRoZXkgYXJlIG5vdCBhbGwgc2VsZWN0ZWQ7IG90aGVyd2lzZSBjbGVhciBzZWxlY3Rpb24uICovXG4gIG1hc3RlclRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQoKSA/XG4gICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpIDpcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZvckVhY2gocm93ID0+IHRoaXMuc2VsZWN0aW9uLnNlbGVjdChyb3cpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wYXJlKGEsIGIsIGlzQXNjKSB7XG4gIHJldHVybiAoYSA8IGIgPyAtMSA6IDEpICogKGlzQXNjID8gMSA6IC0xKTtcbn1cbiJdfQ==