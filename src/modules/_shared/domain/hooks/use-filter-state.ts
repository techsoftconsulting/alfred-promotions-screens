import { useSafeSetState } from "@modules/_shared/domain/hooks/utils-hooks";
import FilterOptions from "@modules/_shared/domain/models/filter-options";
import debounce from "lodash/debounce";
import isEqual from "lodash/isEqual";
import { useCallback, useEffect, useRef } from "react";

interface UseFilterStateOptions {
  filterToQuery?: (v: string) => FilterOptions;
  permanentFilter?: FilterOptions;
  debounceTime?: number;
}

interface UseFilterStateProps {
  filter: FilterOptions;
  setFilter: (v: string) => void;
}

const defaultFilterToQuery = (v: string) => ({ q: v });

export default ({
  filterToQuery = defaultFilterToQuery,
  permanentFilter = {},
  debounceTime = 500,
}: UseFilterStateOptions): UseFilterStateProps => {
  const permanentFilterProp = useRef(permanentFilter);
  const latestValue = useRef<string>();
  const [filter, setFilterValue] = useSafeSetState({
    ...permanentFilter,
    ...filterToQuery(""),
  });
  // Developers often pass an object literal as permanent filter
  // e.g. <ReferenceInput source="book_id" reference="books" filter={{ is_published: true }}>
  // The effect should execute again when the parent component updates the filter value,
  // but not when the object literal describes the same values. Therefore,
  // we use JSON.stringify(permanentFilter) in the `useEffect` and `useCallback`
  // dependencies instead of permanentFilter.
  const permanentFilterSignature = JSON.stringify(permanentFilter);

  useEffect(() => {
    if (!isEqual(permanentFilterProp.current, permanentFilter)) {
      permanentFilterProp.current = permanentFilter;
      setFilterValue({
        ...permanentFilter,
        ...filterToQuery(latestValue.current ?? ""),
      });
    }
  }, [permanentFilterSignature, permanentFilterProp, filterToQuery]); // eslint-disable-line react-hooks/exhaustive-deps

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setFilter = useCallback(
    debounce((value: string) => {
      setFilterValue({
        ...permanentFilter,
        ...filterToQuery(value),
      });
      latestValue.current = value;
    }, debounceTime),
    [permanentFilterSignature] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return {
    filter,
    setFilter,
  };
};
