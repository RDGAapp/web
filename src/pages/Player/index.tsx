import { useParams } from 'react-router-dom';

import Breadcrumbs from 'components/Breadcrumbs';

import Profile from './Profile';

const Player = () => {
  const params = useParams();

  const { rdgaNumber } = params;

  return (
    <>
      <Breadcrumbs />
      <Profile rdgaNumber={Number(rdgaNumber)} />
    </>
  );
};

export default Player;
