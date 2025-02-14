import type { M } from './generatedModels';

export namespace I {
  export interface CommonState {
    isCreating: boolean;
    isFetching: boolean;
    isUpdating: boolean;
    isSearching: boolean;
  }

  export interface Results<T> {
    items: T[];
    meta: M.MetaDTO;
  }
}
