import type { NoteFilter } from '~/data/dtos';
import { M } from '~/data/generatedModels';
import type { I } from '~/data/interfaces';
import { Note } from '~/data/models/note.model';
import { removeFalseyObject } from '~/utils/common-function';

type Model = Note.Model;
type Payload = M.NotePayload;
type F = NoteFilter;

type Result = Promise<Model | null>;
type Results = Promise<I.Results<Model> | null>;

const endpoint = '/notes';
const from = 'note.service';

export async function createApi(payload: Payload): Result {
  try {
    const { data } = await getApi().post(`${endpoint}`, payload);

    toastT('Created', 'success');

    return new Note.Model(data.result);
  } catch (error) {
    handleError(error, from);
    return null;
  }
}

export async function getByIdApi(id: string): Result {
  try {
    const { data } = await getApi().get(`${endpoint}/${id}`);

    return new Note.Model(data.result);
  } catch (error) {
    handleError(error, from);
    return null;
  }
}

export async function getListApi(payload: F): Results {
  try {
    const params = removeFalseyObject(payload);

    const { data } = await getApi().get(`${endpoint}/list`, { params });

    return {
      items: data.result.items?.map((e: any) => new Note.Model(e)),
      metadata: new M.MetadataDTO(data.result.meta),
    };
  } catch (error) {
    handleError(error, from);
    return null;
  }
}

export async function updateApi(payload: Model): Result {
  try {
    const mappedData = new M.NotePayload(payload);

    const { data } = await getApi().put(
      `${endpoint}/${payload.noteId}`,
      mappedData,
    );

    toastT('Updated!', 'success');

    return new Note.Model(data.result);
  } catch (error) {
    handleError(error, from);
    return null;
  }
}

export async function deleteApi(id: string): Promise<boolean> {
  try {
    await getApi().delete(`${endpoint}/${id}`);

    toastT('Delete!', 'success');

    return true;
  } catch (error) {
    handleError(error, from);
    return false;
  }
}
