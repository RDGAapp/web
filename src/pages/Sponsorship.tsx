import styled from 'styled-components';
import PageHeader from 'components/PageHeader';
import ContentContainer from 'components/ContentContainer';
import Text from 'components/Text';
import QRCode from 'assets/sponsor-qr.png';
import HomeLink from 'components/HomeLink';

const QRCodeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Sponsorship = (): JSX.Element => (
  <>
    <PageHeader text="Диск-гольф против дивана: сделай диск-гольф сильней!" />
    <ContentContainer>
      <Text>
        Друзья, в рамках пропаганды здорового образа жизни и развития диск-гольфа мы
        постоянно реализуем спортивные общественные проекты. Для реализации этих проектов
        мы с благодарностью принимаем донаты и каждый год отчитываемся о сумме собранных
        средств и реализованных проектах.
      </Text>
      <Text>
        {`Запланированные на ${new Date().getFullYear().toString()} год проекты, требующие поддержки:`.toUpperCase()}
        <ul>
          <li>
            Проведение еженедельных общедоступных бесплатных мастер-классов по диск-гольфу в Москве,
            Санкт-Петербурге, Нижнем Новгроде, Екатеринбурге, Белгороде;
          </li>
          <li>
            Размещение общедоступных бесплатных тренировочных площадок в центральных парках Москвы,
            Санкт-Петербурга, Нижнего Новгрода, Екатеринбурга, Белгорода;
          </li>
          <li>
            Проведение бесплатных мастер-классов и турниров между детскими
            домами города Екатеринбурга.
          </li>
        </ul>
      </Text>
      <Text id="sponsor">
        QR-код который отправит ваше пожертвование на развитие спорта:
      </Text>
      <QRCodeContainer>
        <img src={QRCode} alt="" />
      </QRCodeContainer>
      <HomeLink />
    </ContentContainer>
  </>
);

export default Sponsorship;
