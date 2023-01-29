import ContentContainer from 'components/ContentContainer';
import PageHeader from 'components/PageHeader';
import SubHeader from 'components/SubHeader';
import Text from 'components/Text';

const Companies = (): JSX.Element => (
  <>
    <PageHeader text="Диск-гольф против дивана: сделай диск-гольф сильней!" />
    <ContentContainer>
      <SubHeader>
        Корпоративному сектору в любой точке РФ и стран СНГ мы предлагаем:
      </SubHeader>
      <Text>
        <ul>
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
        </ul>
      </Text>
      <Text>
        Наши координаты для заказа указаны ниже! Мы всегда ждем звонка от Вас!
      </Text>
    </ContentContainer>
  </>
);

export default Companies;
