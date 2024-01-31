import Card from 'pages/Players/Card';
import { IPlayer } from 'types/player';

interface IPreview {
  player: IPlayer;
}

const Preview = ({ player }: IPreview) => <Card player={player} />;

export default Preview;
