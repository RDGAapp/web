import { Post } from './db';
import { IPlayer } from './player';

export interface IPostBase {
  code: Post['code'];
  author: Post['author'];
  header: Post['header'];
  text: Post['text'];
  createdAt: string;
  authorRdgaNumber: Post['author_rdga_number'];
}

export interface IPost extends IPostBase {
  authorName: IPlayer['name'];
  authorSurname: IPlayer['surname'];
  authorAvatarUrl: IPlayer['avatarUrl'];
}
