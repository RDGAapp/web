import styled from 'styled-components';

import ContentContainer from 'components/ContentContainer';
import HomeLink from 'components/HomeLink';
import PageHeader from 'components/PageHeader';
import SubHeader from 'components/SubHeader';
import Text from 'components/Text';

const Ul = styled.ul`
  margin: 0;
`;

const Companies = (): JSX.Element => (
  <>
    <PageHeader text="Диск-гольф против дивана: сделай диск-гольф сильней!" />
    <ContentContainer>
      <SubHeader>
        Корпоративному сектору в любой точке РФ и стран СНГ мы предлагаем:
      </SubHeader>
      <Text>
        <Ul>
          <li>
            Проектирование, оборудование тренировочных и профессиональных диск-гольф парков;
          </li>
          <li>
            Изготовление дисков с индивидуальным дизайном;
          </li>
          <li>
            Проведение лиг и турниров по диск-гольфу;
          </li>
          <li>
            Проведение мини-турниров в составе корпоративных мероприятий;
          </li>
          <li>
            Постоянные групповые тренировки по диск-гольфу.
          </li>
        </Ul>
      </Text>
      <Text>
        Наши координаты для заказа указаны ниже! Мы всегда ждем звонка от Вас!
      </Text>
      <HomeLink />
    </ContentContainer>
  </>
);

export default Companies;
