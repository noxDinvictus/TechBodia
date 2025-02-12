<template>
  <button :type="type" @click="$emit('click')">
    <NuxtImg :src="icon" :alt="alt" height="20" width="20" />
  </button>
</template>
<script setup lang="ts">
interface IProps {
  icon: string;
  alt: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

defineProps<IProps>();
defineEmits(['click']);
</script>
