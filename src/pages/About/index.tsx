import { useEffect, useState } from 'react';

import styled from 'styled-components';

import ArrowSvg from 'assets/icons/arrow.svg?react';
import RdgaImg from 'assets/images/neutral-rdga.webp';
import CountdownTimer from 'components/CountdownTimer';
import DocLink from 'components/DocLink';
import InlineLink from 'components/InlineLink';
import {
  Header,
  TextContainer,
  Row,
  PageContainer,
  ImageContainer,
  CustomImage,
} from 'components/PageContent';
import { PlanContent, PlanContentType } from 'pages/About/planContent';
import PlanPart from 'pages/About/PlanPart';

import LawInfo from './LawInfo';

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

  ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }
`;

const PlanCardContainer = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  width: 100%;
  max-width: 30rem;
  margin: 1rem 0;
  border-radius: 2rem;

  background-color: ${({ theme }) => theme.colors.lighterBackground};
  box-shadow: 0 0 1px ${({ theme }) => theme.colors.black};
`;

const PlanCardHeader = styled.div`
  isolation: isolate;
  position: relative;

  width: 100%;
  height: 5rem;
  padding: 1rem;

  font-weight: bold;
  text-align: center;

  background-color: ${({ theme }) => theme.colors.primary};

  & p {
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    translate: -50% -50%;

    font-size: 3rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors.black};
  }
`;

const Step = styled.p`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  max-width: 60ch;

  font-size: 1rem;
  text-align: center;
`;

const StepNumber = styled.div`
  padding: 0.5rem 1rem;
  border: 0.3rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 100vh;

  font-size: 1.3rem;
  font-weight: bold;
  font-variant: tabular-nums;
`;

const ArrowDown = styled(ArrowSvg)`
  transform: rotate(90deg);
  width: 2rem;
`;

const colorByContentType = {
  [PlanContentType.Junior]: 'hsl(0, 0%, 100%)',
  [PlanContentType.Base]: 'hsl(217, 84%, 55%)',
};

const planContentTypeMinAmounts = {
  [PlanContentType.Junior]: 500,
  [PlanContentType.Base]: 1_500,
};

const planContentTypeMinAmountsIncreased = {
  [PlanContentType.Junior]: 500,
  [PlanContentType.Base]: 1_700,
};

const increaseDate = new Date(
  Date.UTC(new Date().getFullYear(), 2, 31, 21, 0, 0, 0),
);

const getPlanContentMinAmounts = () =>
  new Date() >= increaseDate
    ? planContentTypeMinAmountsIncreased
    : planContentTypeMinAmounts;

const maxValue = getPlanContentMinAmounts()[PlanContentType.Base] + 1_000;
const minValue = getPlanContentMinAmounts()[PlanContentType.Junior];
const range = maxValue - minValue;

const getLinearGradient = () => {
  const boundaries: Record<PlanContentType, { from: string; to: string }> = {
    [PlanContentType.Junior]: { from: '', to: '' },
    [PlanContentType.Base]: { from: '', to: '' },
  };

  const order = [PlanContentType.Junior, PlanContentType.Base];

  const minAmounts = getPlanContentMinAmounts();

  order.forEach((type, index) => {
    boundaries[type].from =
      index === 0
        ? '0%'
        : `${Math.round(((minAmounts[type] - minValue) * 100) / range)}%`;
    boundaries[type].to =
      index === order.length - 1
        ? '100%'
        : `${Math.round(
            ((minAmounts[order[index + 1]] - minValue) * 100) / range,
          )}%`;
  });

  let gradient = 'linear-gradient(to right, ';
  order.forEach((type, index) => {
    gradient += `${colorByContentType[type]} ${boundaries[type].from} ${
      boundaries[type].to
    }${index !== order.length - 1 ? ', ' : ''}`;
  });
  gradient += ')';

  return gradient;
};

const RangeInput = styled.input`
  width: 80%;
  height: 0.7rem;
  border-radius: 2rem;

  appearance: none;
  background: ${getLinearGradient()};
  outline: 0;
  box-shadow: 0 0 4px ${({ theme }) => theme.colors.backdrop};

  &::-webkit-slider-thumb {
    aspect-ratio: 1 / 1;
    width: 1.2rem;
    border-radius: 50%;

    appearance: none;
    background-image: radial-gradient(
      circle,
      ${({ theme }) => theme.colors.background} 40%,
      ${({ theme }) => theme.colors.primary} 45%
    );
    box-shadow: 0 0 4px 2px ${({ theme }) => theme.colors.backdrop};
  }

  &::-moz-range-thumb {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    appearance: none;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    box-shadow: 0 0 4px 2px ${({ theme }) => theme.colors.backdrop};
  }

  ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }
`;

const campaignStartDate = new Date(
  Date.UTC(new Date().getFullYear(), 1, 14, 21, 0, 0, 0),
);

const About = (): JSX.Element => {
  const [price, setPrice] = useState(500);
  const [manuallyChanged, setManuallyChanged] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  let lowerPlanType: PlanContentType | undefined = PlanContentType.Junior;
  let selectedPlanType = PlanContentType.Junior;
  const minAmounts = getPlanContentMinAmounts();
  if (price >= minAmounts[PlanContentType.Base]) {
    selectedPlanType = PlanContentType.Base;
    lowerPlanType = PlanContentType.Junior;
  } else if (price >= minAmounts[PlanContentType.Junior]) {
    selectedPlanType = PlanContentType.Junior;
    lowerPlanType = undefined;
  }

  useEffect(() => {
    if (manuallyChanged) return;

    let timer: NodeJS.Timeout;

    const increasePrice = () => {
      if (manuallyChanged) return;

      setPrice((current) => (current >= maxValue ? 500 : current + 100));

      timer = setTimeout(increasePrice, 1_000);
    };

    timer = setTimeout(increasePrice, 1_000);

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
          <DocLink
            text='Подробнее о РДГА'
            fileUrl='/docs/rdga.pdf'
            fileName='rdga-about'
          />
          {/* <p>
            <InlineLink
              route='https://www.tinkoff.ru/cf/9mJN821ed7D'
              text='Поддержать РДГА'
              isExternal
            />
          </p> */}
        </TextContainer>
      </Row>
      {currentDate >= campaignStartDate ? (
        <>
          <Header id='join' style={{ textAlign: 'center' }}>
            Порядок вступления или продления членства РДГА
          </Header>
          <PlanContainer>
            <StepNumber>1</StepNumber>
            <Step>Выбери тариф вступления в клуб РДГА</Step>
            <InputDescription>
              <p>← {minValue} ₽</p>
              <p>{maxValue}+ ₽ →</p>
            </InputDescription>
            <RangeInput
              type='range'
              min={minValue}
              max={maxValue}
              step={100}
              onChange={(e) => {
                if (!manuallyChanged) {
                  setManuallyChanged(true);
                }
                setPrice(Number(e.target.value));
              }}
              value={price}
            />
            <PlanCardContainer>
              <PlanCardHeader
                style={{
                  backgroundColor: colorByContentType[selectedPlanType],
                }}
              >
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
                  text='Пластиковая карта члена клуба РДГА дизайна 2025 года'
                  isSame={
                    PlanContent[selectedPlanType].charmType ===
                    (lowerPlanType ? PlanContent[lowerPlanType].charmType : '')
                  }
                  isAllowed={!!PlanContent[selectedPlanType].charmType}
                />
                <PlanPart
                  text='Сувенирный маркер диск члена клуба РДГА дизайна 2025 года (за отдельную плату)'
                  isSame={selectedPlanType !== PlanContentType.Junior}
                  isAllowed
                  yesText='600₽'
                />
                <PlanPart
                  text='Знаки достижений (браслеты, значки)'
                  isSame={selectedPlanType !== PlanContentType.Junior}
                  isAllowed
                />
                <PlanPart
                  text='Скидка на участие в ПроТуре (каждый этап)'
                  isSame={selectedPlanType !== PlanContentType.Junior}
                  isAllowed
                  yesText='500₽ (по запросу игрока при регистрации)'
                />
                <PlanPart
                  text='Участие в розыгрышах и акциях РДГА'
                  isSame={selectedPlanType !== PlanContentType.Junior}
                  isAllowed
                />
                <PlanPart
                  text='Ведение статистики спортивных достижений игрока (при участии в аккредитованных турнирах)'
                  isSame={selectedPlanType !== PlanContentType.Junior}
                  isAllowed
                />
                <PlanPart
                  text='Включение в список Членов клуба РДГА на ресурсах РДГА'
                  isSame={selectedPlanType !== PlanContentType.Junior}
                  isAllowed
                />
              </div>
            </PlanCardContainer>
            <div>
              <ArrowDown />
            </div>
            <StepNumber>2</StepNumber>
            <Step>
              <InlineLink
                route='https://discgolf.bitrix24site.ru/new25/'
                text='Заполни анкету игрока'
                isExternal
              />
            </Step>
            <div>
              <ArrowDown />
            </div>
            <StepNumber>3</StepNumber>
            <Step>
              Оплати взнос с помощи встроенной в анкету игрока формы оплаты
            </Step>
            <div>
              <ArrowDown />
            </div>
            <StepNumber>4</StepNumber>
            <Step>
              В течение 3 дней получи подтверждение регистрации на указанную в
              анкете игрока электронную почту, при необходимости уточни анкетные
              данные
            </Step>
            <div>
              <ArrowDown />
            </div>
            <StepNumber>5</StepNumber>
            <Step>Получи пакет члена РДГА на федеральном мероприятии</Step>
          </PlanContainer>
        </>
      ) : (
        <>
          <Header id='join'>До старта кампании:</Header>
          <CountdownTimer
            deadline={campaignStartDate}
            onTimeUpdate={setCurrentDate}
          />
        </>
      )}

      <LawInfo />
    </PageContainer>
  );
};

export default About;
