import { useAppSelector } from 'store/hooks';

import Profile from './Player/Profile';

const UserProfile = () => {
  const { user } = useAppSelector((state) => state.user);

  if (!user) return null;

  return <Profile rdgaNumber={user.rdgaNumber} />;
};

export default UserProfile;
