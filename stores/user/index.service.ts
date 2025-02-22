import type { M } from '~/data/models';
import { User } from '~/data/models/user.model';

type Model = User.Model;
type Payload = M.UserPayload;

const endpoint = '/users';
const from = 'user.service';

export async function authenticateApi(
  payload: Payload,
): Promise<string | null> {
  try {
    const { data } = await getApi().post(`${endpoint}/authenticate`, payload);

    return data.result;
  } catch (error) {
    handleError(error, from);
    return null;
  }
}

export async function createApi(payload: Payload): Promise<Model | null> {
  try {
    const { data } = await getApi().post(`${endpoint}`, payload);

    toastT('Created', 'success');

    return new User.Model(data.result);
  } catch (error) {
    handleError(error, from);
    return null;
  }
}
