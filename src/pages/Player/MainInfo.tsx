import styled from 'styled-components';

import { ReactComponent as LocationSvg } from 'assets/icons/location.svg';
import Avatar from 'components/Avatar';
import { IPlayer } from 'types/player';

import CommonBadgeStyle from './CommonBadgeStyle';

const Container = styled.div`
  ${CommonBadgeStyle}
  display: flex;
  grid-column: span 3;
  grid-row: span 4;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  text-align: center;

  & #avatar {
    min-width: 7rem;
    min-height: 7rem;
  }

  & > h1 {
    font-size: 2rem;
  }

  ${({ theme }) => theme.media.tablet} {
    grid-column: span 4;
  }

  ${({ theme }) => theme.media.mobile} {
    grid-column: span 2;
    grid-row: span 1;
  }
`;

const InfoLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;
  line-height: 2rem;

  & svg {
    width: 2rem;
  }
`;

interface IMainInfoProps {
  name: IPlayer['name'];
  surname: IPlayer['surname'];
  town: IPlayer['town'];
  avatarUrl: IPlayer['avatarUrl'];
}

const MainInfo = ({ name, surname, town, avatarUrl }: IMainInfoProps) => (
  <Container>
    <Avatar imageSrc={avatarUrl} />
    <h1>
      {surname}
      {surname && <br />}
      {name}
    </h1>
    <InfoLine>
      <LocationSvg />
      <p>{town || '-'}</p>
    </InfoLine>
  </Container>
);

export default MainInfo;
