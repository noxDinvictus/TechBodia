/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface MetadataDTO {
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  totalPages?: number;
  /** @format int32 */
  totalItems?: number;
}

export interface NoteDTO {
  /** @format uuid */
  noteId?: string;
  title?: string | null;
  content?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format uuid */
  createdByUserId?: string;
}

export interface NoteDTOResultOk {
  result?: NoteDTO | null;
  /** @format int32 */
  statusCode?: number;
}

export interface NoteNoteDTONoteFilterListResultDTO {
  items?: NoteDTO[] | null;
  metadata?: MetadataDTO | null;
}

export interface NoteNoteDTONoteFilterListResultDTOResultOk {
  result?: NoteNoteDTONoteFilterListResultDTO | null;
  /** @format int32 */
  statusCode?: number;
}

export interface NotePayload {
  title?: string | null;
  content?: string | null;
}

export enum Roles {
  User = 'User',
  Admin = 'Admin',
}

export interface StringResultOk {
  result?: string | null;
  /** @format int32 */
  statusCode?: number;
}

export interface UserDTO {
  /** @format uuid */
  userId?: string;
  username?: string | null;
  /** @format date-time */
  createdAt?: string;
  role?: Roles;
}

export interface UserDTOResultOk {
  result?: UserDTO | null;
  /** @format int32 */
  statusCode?: number;
}

export interface UserPayload {
  username?: string | null;
  password?: string | null;
  role?: Roles;
}
