<script setup lang="ts">
import { useUserStore } from './stores/user/index.module';

const router = useRouter();
const userStore = useUserStore();

onBeforeMount(() => {
  if (!userStore.token) router.replace('/');
});

onUnmounted(() => {
  userStore.logout();
});
</script>

<template>
  <NuxtPage />
</template>
