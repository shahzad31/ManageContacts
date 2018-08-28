import { Store } from '@ngrx/store';
export declare class ContactAddEditService {
    private rxStore;
    contacts: any;
    store: any;
    dataSource: any;
    constructor(rxStore: Store<any>);
    add(data: any): any;
}
