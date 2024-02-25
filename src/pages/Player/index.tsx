import { useParams } from 'react-router-dom';

import Profile from './Profile';

const Player = () => {
  const params = useParams();

  const { rdgaNumber } = params;

  return <Profile rdgaNumber={Number(rdgaNumber)} />;
};

export default Player;
