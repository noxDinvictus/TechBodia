import type { M } from './generatedModels';

export namespace I {
  export interface CommonState {
    isCreating: boolean;
    isFetching: boolean;
    isUpdating: boolean;
    isSearching: boolean;
    isDeleting: boolean;
  }

  export interface Results<T> {
    items: T[];
    metadata: M.MetadataDTO;
  }
}

export namespace Filter {
  export interface Base {
    orderByColumn?: string | null;
    orderByDescending?: boolean;
    currentPage?: number;
    itemsPerPage?: number;
  }

  export interface Note extends Base {
    searchText?: string | null;
  }
}
