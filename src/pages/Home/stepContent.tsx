import InternationalStep from 'assets/images/international-step.webp';
import MasterStep from 'assets/images/master-step.webp';
import NewbieStep from 'assets/images/newbie-step.webp';
import ProStep from 'assets/images/pro-step.webp';
import TrainStep from 'assets/images/train-step.webp';
import CustomLink from 'components/CustomLink';
import DocLink from 'components/DocLink';
import SubHeader from 'components/SubHeader';
import routes from 'helpers/routes';
import { IStepContent } from 'pages/Home/Step';

const StepContent: Record<number, IStepContent> = {
  1: {
    backgroundImage: MasterStep,
    header: 'Мастер-класс',
    subheader: 'Попробовать и полюбить',
    description: [
      `
      В ${new Date()
        .getFullYear()
        .toString()} году мы регулярно проводим мастер-классы. Приходи
      один или с друзьями - с собой ничего не нужно. Научись красиво и
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
        <SubHeader>Для игры каждому понадобится:</SubHeader>
        <ul>
          <li>Один диск для игры</li>
          <li>Знание основных правил диск-гольфа</li>
        </ul>
        <DocLink
          text='Скачать правила диск-гольфа'
          fileUrl='/docs/rules.pdf'
          fileName='disc-golf-rules'
        />
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
        Турнир - это азарт и драйв, здесь буря эмоций борются с выдержкой и холодным расчетом!
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
        Диск-гольф - это твоё,
        твой уровень игры соответствует желтому браслету и выше,
        ты хочешь испытать свои силы с сильнейшими игроками России?
        Тогда ждём тебя на турнирах для профессионалов.
      `,
    ],
    actionPart: (
      <>
        <p>
          Если тебя интересует рейтинг относительно других игроков, то становись
          членом РДГА и тогда твой рейтинг будет обновляться вместе со всеми!
        </p>
        <CustomLink
          route={`${routes.About}${routes.Join}`}
          text='Вступить в клуб РДГА'
        />
        <p>Ближайший турнир можно найти на странице турниров</p>
        <CustomLink route={routes.Calendar} text='Найти ближайший турнир' />
      </>
    ),
  },

  5: {
    backgroundImage: InternationalStep,
    header: 'Международный',
    subheader: 'Играй за границей!',
    description: [
      `Ты занимаешь призовые места на федеральных турнирах - участвуй в международных!`,
      `Опыт участия в таких событиях поднимет уровень твоей игры до новых высот!`,
    ],
    actionPart: (
      <>
        <p>
          Посмотреть календарь турниров ты можешь на официальном сайте
          международной профессиональной ассоциации диск-гольфа:
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

export default StepContent;
