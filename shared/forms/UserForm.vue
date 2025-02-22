<template>
  <h1 class="mb-2 text-center text-xl text-white">Enter Details</h1>

  <form @submit.prevent="handleSubmit">
    <div class="mb-4 text-lg">
      <Input
        v-model="payload.username"
        label="Username"
        type="text"
        name="username"
        :required="true"
      />
    </div>

    <div class="mb-4 text-lg">
      <Input
        v-model="payload.password"
        label="password"
        type="password"
        name="password"
        :required="true"
      />
    </div>
    <div class="mt-8 flex justify-center gap-2 text-lg text-black">
      <Button title="Login" type="submit" :loading="isFetching" />

      <Button
        title="Register"
        type="button"
        @click="register"
        :loading="isCreating"
        class-name="bg-green-500 hover:bg-green-600"
      />
    </div>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Roles } from '~/data/dtos';
import type { M } from '~/data/models';
import { useUserStore } from '~/stores/user/index.module';
import Button from '../components/Button.vue';
import Input from '../components/Input.vue';

const router = useRouter();

const userStore = useUserStore();
const { isCreating, isFetching } = storeToRefs(userStore);

const payload = ref<M.UserPayload>({
  username: '',
  password: '',
  role: Roles.User,
});

async function register() {
  if (payload.value.password && payload.value.username) {
    await userStore.create(payload.value);
  }
}

async function handleSubmit() {
  if (payload.value.password && payload.value.username) {
    await userStore.authenticate(payload.value);
    router.push('/notes');
  }
}
</script>
