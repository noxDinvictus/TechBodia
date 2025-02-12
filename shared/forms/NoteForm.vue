<template>
  <div
    class="relative m-2 mx-auto rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg"
  >
    <div class="flex rounded-md bg-slate-300 p-7">
      <form @submit.prevent="createNote" class="center w-full flex-col">
        <div class="mb-4 w-full text-lg">
          <input
            v-model="payload.title"
            class="w-full rounded-3xl border-none bg-white px-6 py-2 text-center shadow-md outline-none"
            type="text"
            name="title"
            placeholder="Title"
            required
          />
        </div>

        <div class="mb-4 w-full text-lg">
          <textarea
            v-model="payload.content"
            class="w-full rounded-3xl border-none bg-white px-6 py-2 text-center shadow-md outline-none"
            type="text"
            name="content"
            placeholder="Content"
            rows="4"
          />
        </div>
        <div class="flex justify-center text-lg text-black">
          <Button type="submit" title="Save" :loading="isCreating" />
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Note } from '~/data/models/note.model';
import { useNoteStore } from '~/stores/note/index.module';
import Button from '../components/Button.vue';

const noteState = useNoteStore();
const { isCreating } = storeToRefs(noteState);

const payload = ref<Note.Payload>({
  title: '',
  content: '',
});

function createNote() {
  noteState.create(payload.value);
}
</script>
