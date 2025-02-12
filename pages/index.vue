<template>
  <client-only>
    <div
      class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
      style="background-image: url('/TechBodia/img/bg.jpg')"
    >
      <div
        class="max-sm:px-8 rounded-xl bg-gray-600 bg-opacity-40 px-16 py-10 shadow-lg backdrop-blur-md"
      >
        <div class="text-black">
          <UserForm />
        </div>
      </div>
    </div>
  </client-only>
</template>
<script setup lang="ts">
import UserForm from '~/shared/forms/UserForm.vue';

useHead({
  title: 'Login',
});
</script>
