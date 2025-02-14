import { defineStore } from 'pinia';
import { commonState } from '~/data/constant';
import type { M } from '~/data/generatedModels';
import type { I } from '~/data/interfaces';
import * as service from './index.service';

type Payload = M.UserPayload;

interface UserState extends I.CommonState {
  token: string | null;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: useCookie<string | null>('token', { default: () => null }).value,
    ...commonState,
  }),
  actions: {
    async create(payload: Payload) {
      this.isCreating = true;

      await service.createApi(payload);

      this.isCreating = false;
    },

    async authenticate(payload: Payload) {
      this.isFetching = true;

      const res = await service.authenticateApi(payload);

      if (res) {
        this.token = res;
        useCookie('token').value = res;
      }

      this.isFetching = false;
    },
    logout() {
      this.token = null;
      useCookie('token').value = null;
    },
  },
});
