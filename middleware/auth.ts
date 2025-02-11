import { useUserStore } from '~/stores/user/index.module';

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useUserStore();
  if (!authStore.token && to.path !== '/') {
    return navigateTo('/', { replace: true });
  }
});
