import { IUserBaseInfo } from 'types/user';

export interface UserState {
  user: IUserBaseInfo | null;
  loading: boolean;
  registering: boolean;
}
