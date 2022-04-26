import styled from 'styled-components';

import PlayerPackages from 'assets/images/player-packages.webp';
import ContentContainer from 'components/ContentContainer';
import HomeLink from 'components/HomeLink';
import PageHeader from 'components/PageHeader';
import SubHeader from 'components/SubHeader';
import Text from 'components/Text';

const Cta = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  transition: color 0.3s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const Img = styled.img`
  width: 100%;
  margin: auto;
`;

const About = (): JSX.Element => (
  <>
    <PageHeader text="Что такое РДГА?" />
    <ContentContainer>
      <Text>
        <dfn>Российская Диск-Гольф Ассоциация</dfn>
        {' '}
        - объединение игроков в диск-гольф,
        целью которого является развитие этого спорта в России.
        Вступая в ряды
        {' '}
        <abbr title="Российская Диск-Гольф Ассоциация">РДГА</abbr>
        , спортсмен получает уникальный номер игрока
        (присваивается навсегда), стартовый пакет игрока, и получает право
        участия во всех турнирах под эгидой
        {' '}
        <abbr title="Российская Диск-Гольф Ассоциация">РДГА</abbr>
        .
      </Text>
      <SubHeader id="join">
        Как вступить в РДГА?
      </SubHeader>
      <Img src={PlayerPackages} alt="Пакеты игрока" />
      <Text>
        <ol>
          <li>Выбери пакет игрока 👆</li>
          <li>
            <Cta
              href="https://www.tinkoff.ru/cf/6ROmyfvUcO8"
              target="_blank"
              rel="noreferrer"
            >
              Оплати взнос
            </Cta>
          </li>
          <li>
            <Cta
              href="https://docs.google.com/spreadsheets/d/1hCv4gJoCyYuvSqtGRnZ_ovPV_3RmIv71lolvztOxmMk"
              target="_blank"
              rel="noreferrer"
            >
              Выбери свободный номер
            </Cta>
            {' '}
            (если ты приобретаешь членство Активный и выше)
          </li>
          <li>
            <Cta
              href="https://forms.gle/QjCHtVmZXRWkck4e6"
              target="_blank"
              rel="noreferrer"
            >
              Заполни анкету игрока
            </Cta>
          </li>
        </ol>
      </Text>
      <HomeLink />
    </ContentContainer>
  </>
);

export default About;
