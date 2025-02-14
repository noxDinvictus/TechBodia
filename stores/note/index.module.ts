import { defineStore } from 'pinia';
import { commonState } from '~/data/constant';
import type { M } from '~/data/generatedModels';
import type { I } from '~/data/interfaces';
import type { Note } from '~/data/models/note.model';
import * as service from './index.service';

type Model = Note.Model;
type Payload = M.NotePayload;

interface NoteState extends I.CommonState {
  notes: Model[];
  note: Model | null;
}

export const useNoteStore = defineStore('note', {
  state: (): NoteState => ({
    notes: [],
    note: null,
    ...commonState,
  }),
  actions: {
    async create(payload: Payload) {
      this.isCreating = true;

      const res = await service.createApi(payload);

      if (res) this.notes = [res, ...this.notes];

      this.isCreating = false;
    },

    async getById(id: string) {
      this.isFetching = true;

      const res = await service.getByIdApi(id);

      if (res) this.note = res;

      this.isFetching = false;
    },

    async getNotesList(payload: Note.Search) {
      this.isSearching = true;

      const res = await service.getNotesListApi(payload);

      if (res) this.notes = res;

      this.isSearching = false;
    },

    async update(payload: Model) {
      this.isUpdating = true;

      const res = await service.updateApi(payload);

      if (res) {
        this.note = res;

        this.notes = this.notes.map((e) => {
          if (e.noteId === res.noteId) return res;
          else return e;
        });
      }

      this.isUpdating = false;
    },

    async delete(id: string) {
      this.isUpdating = true;

      const res = await service.deleteApi(id);

      if (res) {
        this.notes = this.notes.filter((e) => e.noteId !== id);
      }

      this.isUpdating = false;
    },
  },
});
