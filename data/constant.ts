import type { M } from './generatedModels';
import type { I } from './interfaces';

export const commonState: I.CommonState = {
  isCreating: false,
  isFetching: false,
  isSearching: false,
  isUpdating: false,
};

export const metadata: M.MetaDTO = {
  currentPage: 1,
  totalPages: 0,
  totalItems: 0,
};
