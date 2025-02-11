<template>
  <div class="m-2 flex justify-end">
    <Button type="submit" title="logout" @click="handleLogout" />
  </div>

  <SearchInput :loading="isSearching" @search="getSearch" />
  <div class="flex flex-wrap gap-5 p-5 md:flex-col">
    <div>
      <NoteForm />
    </div>

    <div class="flex flex-1 flex-wrap gap-3">
      <div class="flex-[1_1_250px]">
        <NoteCard v-for="note in firstHalf" :key="note.noteId" :note="note" />
      </div>

      <div class="flex-[1_1_250px]" v-if="notes.length > 1">
        <NoteCard v-for="note in secondHalf" :key="note.noteId" :note="note" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import authMiddleware from '~/middleware/auth';
import NoteCard from '~/shared/cards/NoteCard.vue';
import Button from '~/shared/components/Button.vue';
import SearchInput from '~/shared/components/SearchInput.vue';
import NoteForm from '~/shared/forms/NoteForm.vue';
import { useNoteStore } from '~/stores/note/index.module';
import { useUserStore } from '~/stores/user/index.module';

definePageMeta({
  middleware: authMiddleware,
});

useHead({
  title: 'Notes',
});

const userStore = useUserStore();
const noteState = useNoteStore();
const { notes, isSearching } = storeToRefs(noteState);

const firstHalf = computed(() =>
  notes.value.slice(0, Math.ceil(notes.value.length / 2)),
);

const secondHalf = computed(() =>
  notes.value.slice(Math.ceil(notes.value.length / 2)),
);

onBeforeMount(async () => {
  await noteState.getNotesList({ searchText: '' });
});

function handleLogout() {
  userStore.logout();
  navigateTo('/');
}

async function getSearch(searchText: string) {
  await noteState.getNotesList({ searchText });
}
</script>
