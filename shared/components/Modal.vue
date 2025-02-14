<template>
  <Teleport to="body">
    <transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
      >
        <div class="w-96 rounded-lg bg-white p-6 shadow-lg">
          <div class="mb-4 flex items-center justify-between">
            <h2 class="text-xl font-semibold">{{ title }}</h2>

            <button
              @click="$emit('close')"
              class="text-red-500 hover:text-red-800"
            >
              ✕
            </button>
          </div>
          <hr class="border-gray-500" />

          <div class="py-2">
            <slot />
          </div>

          <hr class="border-gray-500" />

          <div class="mt-4 flex justify-end gap-2">
            <slot name="button" />

            <Button
              @click="$emit('close')"
              class-name="bg-red-300 hover:bg-red-400, text-black"
              title="Close"
            />
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
import Button from './Button.vue';

defineProps({
  isOpen: Boolean,
  title: String,
});

const emit = defineEmits(['close']);
</script>
