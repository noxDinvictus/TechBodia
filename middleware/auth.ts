import { useRequestEvent } from '#app';
import { useUserStore } from '~/stores/user/index.module';

export default defineNuxtRouteMiddleware((to, from) => {
  const event = useRequestEvent();
  if (event) return;

  const authStore = useUserStore();
  if (!authStore.token && to.path !== '/') {
    return navigateTo('/', { replace: true });
  }
});
