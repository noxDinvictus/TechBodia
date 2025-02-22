import { M } from '../models';

export namespace Note {
  export class Model extends M.NoteDTO {
    // * not from API, internal use
    isExpanded: boolean;

    constructor(data: any) {
      super(data);
      this.isExpanded = data?.isExpanded ?? false;
    }
  }
}
