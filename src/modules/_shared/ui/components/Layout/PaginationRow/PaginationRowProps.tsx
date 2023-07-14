export interface PaginationRowProps {
    page: number;
    perPage: number;
    total: number;
    onChangePage: (page: number) => any;
    onChangePerPage: (perPage: number) => any;
    align?: 'start' | 'center' | 'end';
    totalPages: number;
}