import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { ReactComponent as ArrowSvg } from 'assets/icons/arrow.svg';
import RdgaImg from 'assets/images/neutral-rdga.webp';
import CustomLink from 'components/CustomLink';
import {
  Header,
  TextContainer,
  Row,
  PageContainer,
  ImageContainer,
  CustomImage,
} from 'components/PageContent';
import RdgaDocLink from 'components/RdgaDocLink';
import { PlanContent, PlanContentType } from 'pages/About/planContent';
import PlanPart from 'pages/About/PlanPart';

const PlanContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  justify-items: center;
  width: 100%;

  & p {
    width: fit-content;
  }
`;

const InputDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

const PlanCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  width: 100%;
  max-width: 30rem;
  margin: 1rem 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 2rem;

  ${({ theme }) => theme.media.mobile} {
    max-width: 80%;
  }
`;

const PlanCardHeader = styled.div`
  position: relative;
  width: 100%;
  height: 5rem;
  padding: 1rem;
  font-weight: bold;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
  isolation: isolate;

  & p {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    color: ${({ theme }) => theme.colors.text.contrast};
    font-size: 3rem;
    font-style: italic;
    translate: -50% -50%;
  }
`;

const Step = styled.p`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  font-size: 1rem;
  text-align: center;
`;

const StepNumber = styled.div`
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 1.3rem;
  font-variant: tabular-nums;
  border: 0.3rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 100vh;
`;

const ArrowDown = styled(ArrowSvg)`
  width: 2rem;
  transform: rotate(90deg);
`;

const About = (): JSX.Element => {
  const [price, setPrice] = useState(500);
  const [manuallyChanged, setManuallyChanged] = useState(false);

  let lowerPlanType = PlanContentType.Junior;
  let selectedPlanType = PlanContentType.Junior;
  if (price >= 12000) {
    selectedPlanType = PlanContentType.Maecenas;
    lowerPlanType = PlanContentType.Sponsor;
  } else if (price >= 7000) {
    selectedPlanType = PlanContentType.Sponsor;
    lowerPlanType = PlanContentType.Base;
  } else if (price >= 1500) {
    selectedPlanType = PlanContentType.Base;
    lowerPlanType = PlanContentType.Newbie;
  } else if (price >= 1000) {
    selectedPlanType = PlanContentType.Newbie;
    lowerPlanType = PlanContentType.Junior;
  } else if (price >= 500) {
    selectedPlanType = PlanContentType.Junior;
  }

  useEffect(() => {
    if (manuallyChanged) return;

    let timer: NodeJS.Timeout;

    const increasePrice = () => {
      if (manuallyChanged) return;

      setPrice((current) => (current >= 15000 ? 500 : current + 100));

      timer = setTimeout(increasePrice, 1000);
    };

    timer = setTimeout(increasePrice, 1000);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [manuallyChanged]);

  return (
    <PageContainer>
      <Row $imagePosition='right'>
        <ImageContainer>
          <CustomImage src={RdgaImg} $position='left' />
        </ImageContainer>
        <TextContainer $position='left'>
          <Header>Что такое РДГА?</Header>
          <p>
            <dfn>Российская Диск-Гольф Ассоциация</dfn> - добровольное
            объединение лиц с целью развития диск-гольфа в России, подготовки
            спортсменов, организации и проведения спортивных мероприятий.
          </p>
          <p>
            Миссия <abbr title='Российская Диск-Гольф Ассоциация'>РДГА</abbr>:
            обеспечение системного развития и поиск возможностей для взрывного
            развития диск-гольфа в России.
          </p>
          <p>
            Членство в{' '}
            <abbr title='Российская Диск-Гольф Ассоциация'>РДГА</abbr> - участие
            в федеральном объединении игроков в диск-гольф и получение
            соответствующих привилегий (см. ниже), в т.ч. расчет индивидуального
            рейтинга, отражающего ваши спортивные достижения, а также приобщение
            к развитию диск-гольфа в стране.
          </p>
          <RdgaDocLink />
          <p>
            <CustomLink
              route='https://www.tinkoff.ru/cf/9mJN821ed7D'
              text='Поддержать РДГА'
              isExternal
            />
          </p>
        </TextContainer>
      </Row>
      <Header id='join'>Порядок вступления или продления членства РДГА</Header>
      <PlanContainer>
        <StepNumber>1</StepNumber>
        <Step>Выбери тариф вступления в РДГА</Step>
        <InputDescription>
          <p>← 500 ₽</p>
          <p>15000+ ₽ →</p>
        </InputDescription>
        <input
          type='range'
          min={500}
          max={15000}
          step={100}
          onChange={(e) => {
            if (!manuallyChanged) {
              setManuallyChanged(true);
            }
            setPrice(Number(e.target.value));
          }}
          value={price}
          style={{ width: '80%' }}
        />
        <PlanCardContainer>
          <PlanCardHeader>
            <p>{selectedPlanType}</p>
          </PlanCardHeader>
          <div style={{ padding: '1rem' }}>
            <PlanPart
              text='Взнос'
              isAllowed
              isSimpleText
              isBigger
              yesText={`${price} ₽`}
            />
            <PlanPart
              text='Ежегодная бирка и карта члена РДГА'
              isAllowed
              yesText='Да'
            />
            <PlanPart
              text='Маркер-диск РДГА'
              isSame={
                PlanContent[selectedPlanType].markerType ===
                PlanContent[lowerPlanType].markerType
              }
              isAllowed={!!PlanContent[selectedPlanType].markerType}
              yesText={PlanContent[selectedPlanType].markerType}
            />
            <PlanPart
              text='Личный онлайн диск-гольф Наставник'
              isSame={
                PlanContent[selectedPlanType].buddy ===
                PlanContent[lowerPlanType].buddy
              }
              isAllowed={PlanContent[selectedPlanType].buddy}
            />
            <PlanPart
              text='Индивидуальная форма РДГА'
              isSame={
                PlanContent[selectedPlanType].individualUniform ===
                PlanContent[lowerPlanType].individualUniform
              }
              isAllowed={!!PlanContent[selectedPlanType].individualUniform}
              yesText={PlanContent[selectedPlanType].individualUniform}
            />
            <PlanPart
              text='Знаки достижений (браслеты, значки)'
              isSame
              isAllowed
            />
            <PlanPart
              text='Разовая скидка на диски'
              isSame={
                PlanContent[selectedPlanType].discsDiscount !==
                PlanContent[lowerPlanType].discsDiscount
              }
              isAllowed={PlanContent[selectedPlanType].discsDiscount}
              yesText='10% на покупку до 3 дисков у партнеров РДГА'
            />
            <PlanPart
              text='Скидка на корзины'
              isSame
              isAllowed
              yesText='20% на покупку корзин у партнёров РДГА'
            />
            <PlanPart
              text='Скидка на участие в кэмпах РДГА'
              isSame
              isAllowed
              yesText='50%'
            />
            <PlanPart text='Публикация рейтинга игрока' isSame isAllowed />
          </div>
        </PlanCardContainer>
        <div>
          <ArrowDown />
        </div>
        <StepNumber>2</StepNumber>
        <Step>
          <CustomLink
            route='https://www.tinkoff.ru/cf/9mJN821ed7D'
            text='Оплати взнос'
            isExternal
          />
          <span>указав ФИО и текст &quot;2023&quot;</span>
        </Step>
        <div>
          <ArrowDown />
        </div>
        <StepNumber>3</StepNumber>
        <Step>
          <CustomLink
            route='https://forms.gle/a8xHLmxURYeZ6ZY47'
            text='Заполни анкету игрока'
            isExternal
          />
        </Step>
        <div>
          <ArrowDown />
        </div>
        <StepNumber>4</StepNumber>
        <Step>
          Получи пакет члена РДГА на федеральном мероприятии или у региональных
          представителей РДГА.
        </Step>
      </PlanContainer>
    </PageContainer>
  );
};

export default About;
