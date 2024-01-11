import Card from 'pages/Players/Card';

import { Player } from '../../../@types/player';

interface IPreview {
  player: Player;
}

const Preview = ({ player }: IPreview) => <Card player={player} />;

export default Preview;
