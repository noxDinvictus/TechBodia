import { Note } from '~/data/models/note.model';

type Model = Note.Model;
type Payload = Note.Payload;

const endpoint = '/notes';
const from = 'note.service';

export async function createApi(payload: Payload): Promise<Model | null> {
  try {
    const { data } = await getApi().post(`${endpoint}`, payload);

    toastT('Created', 'success');

    return new Note.Model(data.result);
  } catch (error) {
    handleError(error, from);
    return null;
  }
}

export async function getByIdApi(id: string): Promise<Model | null> {
  try {
    const { data } = await getApi().get(`${endpoint}/${id}`);

    return new Note.Model(data.result);
  } catch (error) {
    handleError(error, from);
    return null;
  }
}

export async function getNotesListApi(
  payload: Note.Search,
): Promise<Model[] | null> {
  try {
    const { data } = await getApi().post(`${endpoint}/list`, payload);

    return data.result.map((e: any) => new Note.Model(e));
  } catch (error) {
    handleError(error, from);
    return null;
  }
}

export async function updateApi(payload: Model): Promise<Model | null> {
  try {
    const mappedData = new Note.Payload(payload);

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

    return true;
  } catch (error) {
    handleError(error, from);
    return false;
  }
}
