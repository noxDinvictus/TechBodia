/* Generated Models - DO NOT EDIT */
import * as dto from './dtos';

export namespace M {
  export class MetadataDTO {
    currentPage: number;
    totalPages: number;
    totalItems: number;

    constructor(data: any) {
      this.currentPage = data?.currentPage;
      this.totalPages = data?.totalPages;
      this.totalItems = data?.totalItems;
    }
  }

  export class NoteDTO {
    noteId: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    createdByUserId: string;

    constructor(data: any) {
      this.noteId = data?.noteId ?? '';
      this.title = data?.title ?? '';
      this.content = data?.content ?? '';
      this.createdAt = data?.createdAt ?? '';
      this.updatedAt = data?.updatedAt ?? '';
      this.createdByUserId = data?.createdByUserId ?? '';
    }
  }

  export class NotePayload {
    title: string;
    content: string;

    constructor(data: any) {
      this.title = data?.title ?? '';
      this.content = data?.content ?? '';
    }
  }

  export class UserDTO {
    userId: string;
    username: string;
    createdAt: string;
    role: dto.Roles;

    constructor(data: any) {
      this.userId = data?.userId ?? '';
      this.username = data?.username ?? '';
      this.createdAt = data?.createdAt ?? '';
      this.role = data?.role;
    }
  }

  export class UserPayload {
    username: string;
    password: string;
    role: dto.Roles;

    constructor(data: any) {
      this.username = data?.username ?? '';
      this.password = data?.password ?? '';
      this.role = data?.role;
    }
  }
}
