import PaginationOptions from "@modules/_shared/domain/models/pagination-options";
import { useCallback, useEffect, useReducer, useRef } from "react";

export interface PaginationHookResult {
  page: number;
  perPage: number;
  pagination: PaginationOptions;
  setPage: (page: number) => void;
  setPerPage: (perPage: number) => void;
  setPagination: (pagination: PaginationOptions) => void;
}

const paginationReducer = (
  prevState: PaginationOptions,
  nextState: Partial<PaginationOptions>
): PaginationOptions => {
  return {
    ...prevState,
    ...nextState,
  };
};

const defaultPagination = {
  page: 1,
  perPage: 25,
};

export default (
  initialPagination: { perPage?: number; page?: number } = {}
): PaginationHookResult => {
  const [pagination, setPagination] = useReducer(paginationReducer, {
    ...defaultPagination,
    ...initialPagination,
  });
  const isFirstRender = useRef(true);

  const setPerPage = useCallback((perPage) => setPagination({ perPage }), []);
  const setPage = useCallback((page) => setPagination({ page }), []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setPerPage(initialPagination.perPage || 25);
  }, [initialPagination.perPage, setPerPage]);

  return {
    page: pagination.page,
    perPage: pagination.perPage,
    pagination,
    setPage,
    setPerPage,
    setPagination,
  };
};
