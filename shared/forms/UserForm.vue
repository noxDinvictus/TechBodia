<template>
  <h1 class="mb-2 text-center text-xl text-white">Enter Login Details</h1>

  <form @submit.prevent="handleSubmit">
    <div class="mb-4 text-lg">
      <input
        v-model="payload.userName"
        class="rounded-3xl border-none bg-white px-6 py-2 text-center shadow-xl outline-none"
        type="text"
        name="username"
        placeholder="username"
        required
      />
    </div>

    <div class="mb-4 text-lg">
      <input
        v-model="payload.password"
        class="rounded-3xl border-none bg-white px-6 py-2 text-center shadow-xl outline-none"
        type="password"
        name="password"
        placeholder="*********"
        required
      />
    </div>
    <div class="mt-8 flex justify-center text-lg text-black">
      <Button title="Login" type="submit" :loading="isFetching" />

      <Button
        title="Register"
        type="button"
        @click="register"
        :loading="isCreating"
      />
    </div>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '~/data/models/user.model';
import { useUserStore } from '~/stores/user/index.module';
import Button from '../components/Button.vue';

const router = useRouter();

const userStore = useUserStore();
const { isCreating, isFetching } = storeToRefs(userStore);

useHead({
  title: 'Login',
});

const payload = ref<User.Payload>({
  userName: '',
  password: '',
});

async function register() {
  if (payload.value.password && payload.value.userName) {
    await userStore.create(payload.value);
  }
}

async function handleSubmit() {
  if (payload.value.password && payload.value.userName) {
    await userStore.authenticate(payload.value);
    router.push('/notes');
  }
}
</script>
