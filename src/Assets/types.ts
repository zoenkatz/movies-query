import type { ColumnDef } from '@tanstack/react-table';

export interface IMovie {
    title: string,
    year: number,
    imdbID: string
}

export interface IAction {
    type: string;
    payload: any;
}


export interface ReactTableProps<T extends object> {
    data: T[];
    columns: ColumnDef<T>[];
}