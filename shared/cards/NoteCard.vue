<template>
  <div
    class="relative m-2 mx-auto flex-[1_1_250px] rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg"
  >
    <div class="rounded-md bg-white p-7">
      <div class="flex items-center justify-end gap-2">
        <div class="flex flex-1 items-center gap-1">
          <div v-if="isEditing" class="flex-center gap-1">
            <ButtonWithIcon :icon="saveIcon" alt="save" @click="update()" />

            <ButtonWithIcon
              :icon="cancelIcon"
              alt="edit"
              @click="cancelEdit(note)"
            />
          </div>

          <ButtonWithIcon
            v-else
            :icon="editIcon"
            alt="edit"
            @click="editNote(note)"
          />
        </div>

        <div class="flex-center gap-1">
          <ButtonWithIcon
            :icon="deleteIcon"
            alt="delete"
            @click="deleteNote(note.noteId)"
          />

          <ButtonWithIcon
            :icon="expandIcon"
            alt="expand"
            @click="note.isExpanded = !note.isExpanded"
            :class="note.isExpanded ? 'icon--active' : 'icon--not-active'"
          />
        </div>
      </div>

      <div class="py-2">
        <hr />
      </div>

      <h1 class="mb-2 text-xl font-bold">
        Title:
        <span
          ref="titleRef"
          :contenteditable="isEditing"
          @blur="updateNote('title', $event)"
          class="editable"
          :class="{ 'editable--active': isEditing }"
        >
          {{ note.title }}
        </span>
      </h1>
      <p class="font-bold">
        Created Date: {{ readableDateFormat(note.createdAt) }}
      </p>

      <AutoExpand :extend="note.isExpanded || isEditing">
        <div class="flex flex-col gap-3 p-3">
          <p>
            Content:
            <span
              ref="contentRef"
              :contenteditable="isEditing"
              @blur="updateNote('content', $event)"
              class="editable"
              :class="{ 'editable--active': isEditing }"
            >
              {{ note.content }}
            </span>
          </p>
          <p>Last Update: {{ readableDateFormat(note.updatedAt) }}</p>
        </div>
      </AutoExpand>
    </div>
  </div>
</template>

<script setup lang="ts">
import cancelIcon from '@/assets/icons/cancel.svg';
import deleteIcon from '@/assets/icons/delete.svg';
import editIcon from '@/assets/icons/edit.svg';
import expandIcon from '@/assets/icons/expand.svg';
import saveIcon from '@/assets/icons/save.svg';
import { ref } from 'vue';
import type { Note } from '~/data/models/note.model';
import AutoExpand from '~/shared/components/AutoExpand.vue';
import ButtonWithIcon from '~/shared/components/ButtonWithIcon.vue';
import { useNoteStore } from '~/stores/note/index.module';

interface IProps {
  note: Note.Model;
}

const props = defineProps<IProps>();
const noteState = useNoteStore();
const { note: payload } = storeToRefs(noteState);

const titleRef = ref<HTMLSpanElement | null>(null);
const contentRef = ref<HTMLSpanElement | null>(null);

const isEditing = ref(false);

function deleteNote(id: string) {
  noteState.delete(id);
}

function editNote(note: Note.Model) {
  note.isExpanded = true;
  isEditing.value = true;

  noteState.$patch({ note });
}

function updateNote(field: 'title' | 'content', event: Event) {
  const target = event.target as HTMLSpanElement;
  const updatedValue = target.innerText.trim();

  if (props.note[field] !== updatedValue) {
    noteState.$patch((state) => {
      const note = state.notes.find((n) => n.noteId === props.note.noteId);
      if (note) note[field] = updatedValue;
    });
  }
}

function update() {
  if (payload.value) noteState.update(payload.value);
}

function cancelEdit(note: Note.Model) {
  note.isExpanded = false;
  isEditing.value = false;

  noteState.$patch({ note });
}
</script>
