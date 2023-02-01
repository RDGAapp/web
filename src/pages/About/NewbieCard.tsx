import styled from 'styled-components';

import { spell } from 'helpers/wordHelpers';
import { PlanContent, PlanContentType } from 'pages/About/planContent';
import PlanPart from 'pages/About/PlanPart';

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

  p {
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

const NewbieCard = () => (
  <PlanCardContainer>
    <PlanCardHeader>
      <p>{PlanContentType.Newbie}*</p>
    </PlanCardHeader>
    <div style={{ padding: '0 1rem' }}>
      <PlanPart text='Взнос' isAllowed isSimpleText yesText='2000 ₽' />
      <PlanPart
        text='Выбор номера'
        isAllowed={PlanContent[PlanContentType.Newbie].canChooseNumber}
      />
      <PlanPart
        text='Скидка на федеральные турниры'
        isAllowed={
          !!PlanContent[PlanContentType.Newbie].federalTournamentsDiscount
            .discount
        }
        yesText={`${
          PlanContent[PlanContentType.Newbie].federalTournamentsDiscount
            .discount
        } ₽ на все ${
          PlanContent[PlanContentType.Newbie].federalTournamentsDiscount.all
            ? 'федеральные турниры'
            : 'этапы национального тура'
        }`}
      />
      <PlanPart
        text='Сувенир от РДГА'
        isAllowed={!!PlanContent[PlanContentType.Newbie].souvenir}
        yesText={PlanContent[PlanContentType.Newbie].souvenir}
      />
      <PlanPart
        text='Скидки на диски Prodiscus'
        isAllowed={
          !!PlanContent[PlanContentType.Newbie].prodiscusDiscount.discount
        }
        yesText={`${
          PlanContent[PlanContentType.Newbie].prodiscusDiscount.discount
        }% на ${
          PlanContent[PlanContentType.Newbie].prodiscusDiscount.discsNumber
        } ${spell(
          PlanContent[PlanContentType.Newbie].prodiscusDiscount.discsNumber,
          ['диск', 'диска', 'дисков']
        )}`}
      />
      <PlanPart
        text='Рейтинг РДГА'
        isSame
        isAllowed={PlanContent[PlanContentType.Newbie].rdgaRating}
      />
      <PlanPart
        text='Участие в РДГА активностях'
        isSame
        isAllowed={PlanContent[PlanContentType.Newbie].rdgaParticipation}
      />
      <PlanPart
        text='Доступ к мерчу РДГА'
        isSame
        isAllowed={PlanContent[PlanContentType.Newbie].accessToRdgaMerch}
      />
      <PlanPart
        text='Доступ к отчетности РДГА'
        isSame
        isAllowed={PlanContent[PlanContentType.Newbie].accessToRdgaReport}
      />
    </div>
  </PlanCardContainer>
);

export default NewbieCard;
