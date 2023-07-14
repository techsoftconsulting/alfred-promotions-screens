import SortOptions from "@modules/_shared/domain/models/sort-options";
import { useCallback, useEffect, useReducer, useRef } from "react";

const SORT_ASC = "asc";
const SORT_DESC = "desc";

export interface SortProps {
  setSortField: (field: string) => void;
  setSortOrder: (order: string) => void;
  setSort: (sort: SortOptions, order?: string) => void;
  sort: SortOptions;
}

interface Action {
  type: "SET_SORT" | "SET_SORT_FIELD" | "SET_SORT_ORDER";
  payload: {
    sort?: SortOptions;
    field?: string;
    order?: string;
  };
}

const sortReducer = (
  state: Required<SortOptions>,
  action: Action
): Required<SortOptions> => {
  switch (action.type) {
    case "SET_SORT":
      return action.payload.sort as any;
    case "SET_SORT_FIELD": {
      const { field } = action.payload;
      const order =
        state.field === field
          ? state.order === SORT_ASC
            ? SORT_DESC
            : SORT_ASC
          : SORT_ASC;
      return { field: field ?? "id", order };
    }
    case "SET_SORT_ORDER": {
      const { order } = action.payload;
      return {
        ...state,
        order: order ?? "ASC",
      };
    }
    default:
      return state;
  }
};

export const defaultSort = { field: "id", order: "DESC" };

const useSortState = (initialSort: SortOptions = defaultSort): SortProps => {
  const [sort, dispatch] = useReducer(sortReducer, initialSort);
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    dispatch({ type: "SET_SORT", payload: { sort: initialSort } });
  }, [initialSort.field, initialSort.order]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    setSort: useCallback(
      (sort: SortOptions) => dispatch({ type: "SET_SORT", payload: { sort } }),
      [dispatch]
    ),
    setSortField: useCallback(
      (field: string) =>
        dispatch({ type: "SET_SORT_FIELD", payload: { field } }),
      [dispatch]
    ),
    setSortOrder: useCallback(
      (order: string) =>
        dispatch({ type: "SET_SORT_ORDER", payload: { order } }),
      [dispatch]
    ),
    sort,
  };
};

export default useSortState;
