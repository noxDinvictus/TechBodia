<template>
  <div class="auto-expand" :class="[extend && 'auto-expand--show']">
    <div class="auto-expand__object">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
interface IProps {
  extend: boolean;
}

defineProps<IProps>();
</script>
