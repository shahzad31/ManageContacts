import { OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
export declare class NavbarComponent implements OnInit {
    private breakpointObserver;
    isHandset$: Observable<Boolean>;
    constructor(breakpointObserver: BreakpointObserver);
    getPath(link: any): any;
    ngOnInit(): void;
}
