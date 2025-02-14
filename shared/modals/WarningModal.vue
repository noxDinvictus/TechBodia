<template>
  <Modal :isOpen="isOpen" title="Warning!" @close="$emit('close')">
    <p>The action you are about to do is irreversible.</p>

    <p class="my-2 text-center italic">Do you want to continue?</p>

    <template #button>
      <Button
        @click="$emit('yes')"
        class-name="bg-green-300 hover:bg-green-400 text-black"
        title="Yes"
        :loading="isLoading"
      />
    </template>
  </Modal>
</template>
<script setup lang="ts">
import Modal from '~/shared/components/Modal.vue';
import Button from '../components/Button.vue';

interface IProps {
  isOpen: boolean;
  isLoading?: boolean;
}

const props = defineProps<IProps>();

const isOpen = computed(() => props.isOpen);
const emit = defineEmits(['yes', 'close']);
</script>
