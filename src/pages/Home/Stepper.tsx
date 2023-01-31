import { useState } from 'react';

import styled from 'styled-components';

import InternationalStep from 'assets/images/international-step.webp';
import MasterStep from 'assets/images/master-step.webp';
import NewbieStep from 'assets/images/newbie-step.webp';
import ProStep from 'assets/images/pro-step.webp';
import TrainStep from 'assets/images/train-step.webp';
import CustomLink from 'components/CustomLink';
import RulesLink from 'components/RulesLink';
import SubHeader from 'components/SubHeader';
import routes from 'helpers/routes';
import Step, { IStepContent } from 'pages/Home/Step';

const Container = styled.div<{ image: string }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 90%;
  min-height: 28rem;
  max-height: 70vh;
  margin: auto;
  padding: 2rem;
  background: linear-gradient(#0008, #0008), url(${({ image }) => image});
  background-position: center, center;
  background-size: cover;
  border-radius: 3rem;
  transition: all 0.3s ease-in-out;

  ${({ theme }) => theme.media.tablet} {
    min-height: 30rem;
    max-height: 70vh;
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
    min-height: 54rem;
  }
`;

const StepNumbers = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  margin-top: auto;
`;

const StepNumber = styled.div<{ selected: boolean }>`
  width: fit-content;
  height: fit-content;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 1.5rem;
  cursor: not-allowed;
  transition: all 0.3s ease-in-out;
  ${({ selected, theme }) =>
    selected
      ? `background-color: ${theme.colors.primary}`
      : `
        cursor: pointer;

        :hover {
          scale: 1.1;
        }

        :active {
          scale: 0.9;
        }
      `};
`;

const StepContent: Record<number, IStepContent> = {
  1: {
    backgroundImage: MasterStep,
    header: 'Мастер-класс',
    subheader: 'Попробовать и полюбить',
    description: [
      `
      В ${new Date()
        .getFullYear()
        .toString()} году мы регулярно и бесплатно проводим мастер-классы! Приходи
      один или с друзьями - с собой ничего не нужно! Научись красиво и
      метко кидать фрисби, насладись красотой запущенного тобой диска -
      это действительно клёво!
    `,
    ],
    actionPart: (
      <>
        <p>
          Если ты хочешь, чтобы для тебя провели мастер класс или же просто
          поучаствовать, то напиши нам любым удобным для тебя способом.
        </p>
        <CustomLink route={routes.Contacts} text='Написать нам' />
      </>
    ),
  },

  2: {
    backgroundImage: TrainStep,
    header: 'Потренироваться',
    subheader: 'Играть самому и с друзьями',
    description: [
      `
        Парки для игры в диск-гольф обычно общедоступны.
        Ты всегда можешь потренироваться сам или сыграть в диск-гольф с друзьями.
        Для тренировки необходимо лишь несколько дисков.
      `,
    ],
    actionPart: (
      <>
        <p>
          Главный принцип во время тренировок - быть осторожным. Всегда ставьте
          в приоритет безопасность себя и окружающих.
        </p>
        <SubHeader>Для игры каждому участнику понадобится:</SubHeader>
        <ul>
          <li>Минимум один диск для игры;</li>
          <li>Знание основных правил диск-гольфа.</li>
        </ul>
        <RulesLink />
      </>
    ),
  },

  3: {
    backgroundImage: NewbieStep,
    header: 'Начинающий',
    subheader: 'Участвовать в турнирах!',
    description: [
      `Ты только начинаешь играть в диск-гольф? Тогда обязательно приходи на наши турниры!`,
      `
        Турнир - это азарт и драйв, здесь буря эмоций борются с выдержкой и холодным расчетом,
        море опыта и отличных знакомств!
      `,
    ],
    actionPart: (
      <>
        <p>
          Если ты еще ни разу не участвовал в турнирах, то рекомендуется
          связаться с нами, прежде чем участвовать в ближайшем турнире.
        </p>
        <CustomLink route={routes.Contacts} text='Связаться с нами' />
        <p>Ближайший турнир можно найти на странице турниров по ссылке ниже</p>
        <CustomLink route={routes.Calendar} text='Найти ближайший турнир' />
      </>
    ),
  },

  4: {
    backgroundImage: ProStep,
    header: 'Профессионал',
    subheader: 'Соревнуйся с профи!',
    description: [
      `
        Диск-гольф - это твоё, ты хочешь бросать диск точнее и дальше,
        ты перерос турниры для начинающих игроков, твой уровень игры соответствует желтому браслету и выше,
        а сам ты хочешь испытать свои силы с сильнейшими игроками России?
        Тогда ждём тебя на турнирах для профессионалов.
      `,
    ],
    actionPart: (
      <>
        <p>
          В каждом парке действует рейтинговая система, отраженная в цветных
          браслетах. А если тебя интересует рейтинг относительно других игроков,
          то становись членом РДГА и тогда твой рейтинг будет обновляться раз в
          месяц вместе со всеми!
        </p>
        <CustomLink route={routes.About} text='Вступить в РДГА' />
        <p>Ближайший турнир можно найти на странице турниров по ссылке ниже</p>
        <CustomLink route={routes.Calendar} text='Найти ближайший турнир' />
      </>
    ),
  },

  5: {
    backgroundImage: InternationalStep,
    header: 'Международный',
    subheader: 'Играй за границей!',
    description: [
      `Ты занимаешь призовые места на федеральных турнирах - решайся, и участвуй в международных!`,
      `Опыт участия в таких событиях поднимет уровень твоей игры до новых высот!`,
      `Новые страны, новые парки, теплые знакомства - секреты игры!`,
    ],
    actionPart: (
      <>
        <p>
          Посмотреть календарь турниров и выбрать на какой поехать ты можешь на
          официальном сайте международной профессиональной ассоциации
          диск-гольфа:
        </p>
        <CustomLink
          route='https://pdga.com/tour/events'
          text='События PDGA'
          isExternal
        />
        <p>А также:</p>
        <CustomLink
          route='https://discgolfmetrix.com'
          text='Disc-Golf Metrix'
          isExternal
        />
        <CustomLink route='https://UDisc.com' text='UDisc' isExternal />
      </>
    ),
  },
};

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const currentStepContent = StepContent[currentStep];

  if (!currentStepContent) return null;

  return (
    <Container image={currentStepContent.backgroundImage}>
      <Step currentStepContent={currentStepContent} />
      <StepNumbers>
        {Object.keys(StepContent).map((key) => (
          <StepNumber
            key={key}
            selected={key === currentStep.toString()}
            onClick={() => setCurrentStep(Number(key))}
          >
            {key}
          </StepNumber>
        ))}
      </StepNumbers>
    </Container>
  );
};

export default Stepper;