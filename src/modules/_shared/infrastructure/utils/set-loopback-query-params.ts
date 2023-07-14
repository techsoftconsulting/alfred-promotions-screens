import PaginationOptions from '@modules/_shared/domain/models/pagination-options';
import SortOptions from '@modules/_shared/domain/models/sort-options';

export function setWhere(
    url: URL,
    filter: any,
    initKey: string = 'filter[where]'
) {
    let search = url.searchParams;

    search.append(initKey, JSON.stringify(filter));
}

export function setLimitAndOffset(
    url: URL,
    pagination?: PaginationOptions
) {
    const search = url.searchParams;

    if (!pagination) return;

    if (pagination.perPage) {
        search.append('filter[limit]', pagination.perPage + '');
    }

    if (pagination.page && pagination.perPage) {
        search.append(
            'skip',
            (pagination.page - 1) * pagination.perPage + ''
        );
    }
}

export function setOrder(
    url: URL,
    ordering?: SortOptions
) {
    if (!ordering) return;
    const search = url.searchParams;

    search.append('filter[order]', JSON.stringify({ orderBy: ordering.field, orderType: ordering.order }));
}
