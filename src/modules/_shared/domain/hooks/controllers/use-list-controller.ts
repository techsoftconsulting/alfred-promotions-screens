import PaginationOptions from '@modules/_shared/domain/models/pagination-options';
import { useEffect, useState } from 'react';
import SortOptions from '../../models/sort-options';
import { ListContextProviderProps } from '@main-components/Utilities/ListContextProvider';
import { UseGetListValue } from '@modules/_shared/domain/hooks/resources/use-get-list';
import { useUtils } from '@modules/_shared/domain/hooks/use-utils';
import useGetVendorsByCriteria from '@modules/vendors/application/use-get-vendors-by-criteria';
import useGetShopCategories from '@modules/resources/application/use-get-shop-categories';
import useGetRidersByCriteria from '@modules/riders/application/use-get-riders-by-criteria';
import useGetApplicationsByCriteria from '@modules/user-applications/application/use-get-applications-by-criteria';
import useGetProducts from '@modules/vendors/application/products/use-get-products';
import useGetShopSubcategories from '@modules/resources/application/use-get-shop-subcategories';
import useGetUsersCreditsByCriteria from '@modules/customers/application/use-get-users-credits-by-criteria';
import useGetEngagementMessagesByCriteria
    from '@modules/engagement/application/use-get-engagement-messages-by-criteria';
import useGetDiscountCodesByCriteria from '@modules/promotions/application/use-get-discount-codes-by-criteria';
import QueryOptions from '@shared/domain/models/query-options';
import useGetExternalVendorsByCriteria
    from '@modules/vendors/application/external/use-get-external-vendors-by-criteria';

export interface ListControllerProps {
    resource: string;
    pagination?: PaginationOptions;
    sort?: SortOptions;
    filters?: any;
    options?: QueryOptions;
}

export default function useListController(
    props: ListControllerProps
): ListContextProviderProps {
    const [currentFilters, setCurrentFilters] = useState(props.filters);
    const [currentSort, setCurrentSort] = useState(
        props.sort ?? { field: 'id', order: 'ASC' }
    );
    const [page, setPage] = useState(props.pagination?.page);
    const [perPage, setPerPage] = useState(props.pagination?.perPage);
    const { object: ObjectUtils } = useUtils();
    const [initialized, setInitialized] = useState(false);
    initListController({
        initialized,
        props: props,
        setters: {
            setCurrentFilters,
            setInitialized
        }
    });

    const listState = {
        setFilters: (values: any) => {
            setCurrentFilters(ObjectUtils.omitUnknown(values));
        },
        setPage: (newPage: number) => {
            setPage(newPage);
        },
        setPerPage: (newPerPage: number) => {
            setPerPage(newPerPage);
        },
        setSort: (sort: SortOptions) => {
            setCurrentSort(sort);
        },
        currentSort: currentSort,
        displayedFilters: currentFilters,
        filterValues: currentFilters,
        hideFilter: (filterName: string) => {
            const filters = { ...(currentFilters || {}) };

            delete filters[filterName];

            setCurrentFilters(filters);
        },

        hideFilters: (filterNames: string[]) => {
            const filters = { ...(currentFilters || {}) };

            filterNames.forEach((f) => {
                delete filters[f];
            });

            setCurrentFilters(filters);
        },
        showFilter: (filterName: string, defaultValue: any) => {
            const filters = {
                ...(currentFilters || {}),
                ...{ [filterName]: defaultValue }
            };

            setCurrentFilters(filters);
        },
        hasFilters: Object.values(currentFilters as any ?? {}).length > 0,
        page: page,
        perPage: perPage
    };

    const listRequestStatus = useHandleRequestByResource({
        resource: props.resource,
        filters: currentFilters,
        page,
        perPage,
        sort: currentSort,
        options: props.options
    });

    return {
        resource: props.resource,
        ...listRequestStatus,
        total: listRequestStatus.total ?? 0,
        ...listState
    };
}


function initListController({
    initialized,
    props,
    setters: { setCurrentFilters, setInitialized }
}: { initialized: boolean, props: ListControllerProps, setters: { setCurrentFilters: any, setInitialized: any } }) {


    useEffect(() => {
        if (initialized) {
            return;
        }

        if (!props.options || props.options.enabled === undefined) {
            setInitialized(true);
            return;
        }

        if (!props.options.enabled) {
            return;
        }
        setCurrentFilters(props.filters);
        setInitialized(true);
    }, [props.options, initialized]);
}

function useHandleRequestByResource({
    resource,
    filters,
    page,
    perPage,
    sort,
    options
}: {
    resource: string;
    page?: number;
    perPage?: number;
    filters?: any;
    sort?: SortOptions;
    options?: QueryOptions
}) {
    let response: UseGetListValue<any>;

    switch (resource) {

        case 'external_vendors':
            response = {
                ...useGetExternalVendorsByCriteria(filters, { page, perPage }, sort, options)
            };
            break;
        case 'vendors':
            response = {
                ...useGetVendorsByCriteria(filters, { page, perPage }, sort, options)
            };
            break;
        case 'shop-categories':
            response = {
                ...useGetShopCategories(filters, { page, perPage }, sort, options)
            };
            break;
        case 'shop-subcategories':
            response = {
                ...useGetShopSubcategories(filters, { page, perPage }, sort, options)
            };
            break;
        case 'shop-products':
            response = {
                ...useGetProducts(filters, { page, perPage }, sort, options)
            };
            break;
        case 'riders':
            response = {
                ...useGetRidersByCriteria(filters, { page, perPage }, sort, options)
            };
            break;
        case 'applications':
            response = {
                ...useGetApplicationsByCriteria(filters, { page, perPage }, sort, options)
            };
            break;
        case 'user-credits':
            response = {
                ...useGetUsersCreditsByCriteria(filters, { page, perPage }, sort, options)
            };
            break;
        case 'engagement-messages':
            response = {
                ...useGetEngagementMessagesByCriteria(filters, { page, perPage }, sort, options)
            };
            break;
        case 'discount-codes':
            response = {
                ...useGetDiscountCodesByCriteria(filters, { page, perPage }, sort, options)
            };
            break;
        default:
            throw new Error('Resource not defined');
    }

    return response;
}
