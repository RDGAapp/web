import { IPlayer } from './player';

export interface IPostBase {
  code: string;
  author: string | null;
  header: string;
  text: string;
  createdAt: string;
  authorRdgaNumber: number;
}

export interface IPost extends IPostBase {
  authorName: IPlayer['name'];
  authorSurname: IPlayer['surname'];
  authorAvatarUrl: IPlayer['avatarUrl'];
}
