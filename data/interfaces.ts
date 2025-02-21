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
