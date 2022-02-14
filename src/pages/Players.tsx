import ContentContainer from 'components/ContentContainer';

const Players = (): JSX.Element => (
  <ContentContainer>
    <iframe title="RDGA Players IFrame" src="https://discgolfmetrix.com/club/500?locale=ru" width="100%" height="1000">
      Ваш браузер не поддерживает IFrame
    </iframe>
  </ContentContainer>
);

export default Players;
