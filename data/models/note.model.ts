export namespace Note {
  export class Model {
    noteId: string;
    title: string;
    content?: string;
    createdAt: string;
    updatedAt: string;
    createdByUser: string;

    // * not from API, internal use
    isExpanded: boolean;

    constructor(data: any) {
      this.noteId = data?.noteId;
      this.title = data?.title;
      this.content = data?.content;
      this.createdAt = data?.createdAt;
      this.updatedAt = data?.updatedAt;
      this.createdByUser = data?.createdByUser;

      this.isExpanded = data?.isExpanded ?? false;
    }
  }

  export class Payload {
    title: string;
    content?: string;

    constructor(data: any) {
      this.title = data.title;
      this.content = data.content;
    }
  }

  export interface Search {
    searchText?: string;
  }
}
