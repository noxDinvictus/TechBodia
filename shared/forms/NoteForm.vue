<template>
  <div
    class="relative m-2 mx-auto rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg"
  >
    <div class="flex rounded-md bg-slate-300 p-7 sm:p-4">
      <form @submit.prevent="createNote" class="center w-full flex-col">
        <div class="flex-center gap-8">
          <h2 class="text-center font-bold">Create Note</h2>

          <ButtonWithIcon
            :icon="expandIcon"
            alt="expand"
            type="button"
            @click="isExpanded = !isExpanded"
            :class="isExpanded ? 'icon--active' : 'icon--not-active'"
          />
        </div>

        <AutoExpand :extend="isExpanded">
          <div class="mb-4 mt-2 w-full text-lg">
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
          <div class="mb-2 flex justify-center text-lg text-black">
            <Button type="submit" title="Save" :loading="isCreating" />
          </div>
        </AutoExpand>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import expandIcon from '@/assets/icons/expand.svg';
import type { M } from '~/data/generatedModels';
import { useNoteStore } from '~/stores/note/index.module';
import AutoExpand from '../components/AutoExpand.vue';
import Button from '../components/Button.vue';
import ButtonWithIcon from '../components/ButtonWithIcon.vue';
const noteState = useNoteStore();
const { isCreating } = storeToRefs(noteState);

const payload = ref<M.NotePayload>({
  title: '',
  content: '',
});

const isExpanded = ref(true);

function createNote() {
  noteState.create(payload.value);
}
</script>
