import { useState } from 'react';

import styled from 'styled-components';

import RdgaImg from 'assets/images/neutral-rdga.webp';
import CustomLink from 'components/CustomLink';
import { spell } from 'helpers/wordHelpers';
import NewbieCard from 'pages/About/NewbieCard';
import { PlanContent, PlanContentType } from 'pages/About/planContent';
import PlanPart from 'pages/About/PlanPart';

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-items: center;
  margin-top: 2rem;
  padding: 1rem;

  a {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  width: 65%;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;
`;

const CustomImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 1rem;
  aspect-ratio: 1;
  rotate: 5deg;
  transition: rotate 0.3s ease-in-out;

  :hover {
    rotate: 0deg;
  }
`;

const Header = styled.h1`
  font-weight: 400;
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fontFamily.header};
  line-height: 1;
`;

const TextContainer = styled.div`
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.mobile} {
    text-align: center;
  }
`;

const PlanContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  justify-items: center;
  width: 100%;

  p {
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

const Step = styled.p`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 1.3rem;
`;

const About = (): JSX.Element => {
  const [price, setPrice] = useState(0);

  let lowerPlanType = PlanContentType.Base;
  let selectedPlanType = PlanContentType.Base;
  if (price >= 12000) {
    selectedPlanType = PlanContentType.Maecenas;
    lowerPlanType = PlanContentType.Sponsor;
  } else if (price >= 5000) {
    selectedPlanType = PlanContentType.Sponsor;
    lowerPlanType = PlanContentType.Active;
  } else if (price >= 3000) {
    selectedPlanType = PlanContentType.Active;
  }

  return (
    <PageContainer>
      <Container>
        <ImageContainer>
          <CustomImage src={RdgaImg} />
        </ImageContainer>
        <TextContainer>
          <Header>Что такое РДГА?</Header>
          <div>
            <dfn>Российская Диск-Гольф Ассоциация</dfn> - объединение игроков в
            диск-гольф, целью которого является развитие этого спорта в России.
            Вступая в ряды{' '}
            <abbr title='Российская Диск-Гольф Ассоциация'>РДГА</abbr>,
            спортсмен получает уникальный номер игрока (присваивается навсегда),
            стартовый пакет игрока, и получает право участия во всех турнирах
            под эгидой{' '}
            <abbr title='Российская Диск-Гольф Ассоциация'>РДГА</abbr>.
            <br />
            <CustomLink
              route='https://www.tinkoff.ru/cf/9mJN821ed7D'
              text='Поддержать РДГА'
              isExternal
            />
          </div>
        </TextContainer>
      </Container>
      <Header id='join'>Как вступить в РДГА?</Header>
      <PlanContainer>
        <Step>1. Выбери пакет игрока</Step>
        <InputDescription>
          <p>← 0 ₽</p>
          <p>12000+ ₽ →</p>
        </InputDescription>
        <input
          type='range'
          min={0}
          max={12000}
          onChange={(e) => setPrice(Number(e.target.value))}
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
              yesText={`${price} ₽`}
            />
            <PlanPart
              text='Выбор номера'
              isSame={
                PlanContent[selectedPlanType].canChooseNumber ===
                PlanContent[lowerPlanType].canChooseNumber
              }
              isAllowed={PlanContent[selectedPlanType].canChooseNumber}
            />
            <PlanPart
              text='Скидка на федеральные турниры'
              isSame={
                PlanContent[selectedPlanType].federalTournamentsDiscount
                  .discount ===
                  PlanContent[lowerPlanType].federalTournamentsDiscount
                    .discount &&
                PlanContent[selectedPlanType].federalTournamentsDiscount.all ===
                  PlanContent[lowerPlanType].federalTournamentsDiscount.all
              }
              isAllowed={
                !!PlanContent[selectedPlanType].federalTournamentsDiscount
                  .discount
              }
              yesText={`${
                PlanContent[selectedPlanType].federalTournamentsDiscount
                  .discount
              } ₽ на все ${
                PlanContent[selectedPlanType].federalTournamentsDiscount.all
                  ? 'федеральные турниры'
                  : 'этапы национального тура'
              }`}
            />
            <PlanPart
              text='Сувенир от РДГА'
              isSame={
                PlanContent[selectedPlanType].souvenir ===
                PlanContent[lowerPlanType].souvenir
              }
              isAllowed={!!PlanContent[selectedPlanType].souvenir}
              yesText={PlanContent[selectedPlanType].souvenir}
            />
            <PlanPart
              text='Скидки на диски Prodiscus'
              isSame={
                PlanContent[selectedPlanType].prodiscusDiscount.discount ===
                  PlanContent[lowerPlanType].prodiscusDiscount.discount &&
                PlanContent[selectedPlanType].prodiscusDiscount.discsNumber ===
                  PlanContent[lowerPlanType].prodiscusDiscount.discsNumber
              }
              isAllowed={
                !!PlanContent[selectedPlanType].prodiscusDiscount.discount
              }
              yesText={`${
                PlanContent[selectedPlanType].prodiscusDiscount.discount
              }% на ${
                PlanContent[selectedPlanType].prodiscusDiscount.discsNumber
              } ${spell(
                PlanContent[selectedPlanType].prodiscusDiscount.discsNumber,
                ['диск', 'диска', 'дисков']
              )}`}
            />
            <PlanPart
              text='Рейтинг РДГА'
              isSame={
                PlanContent[selectedPlanType].rdgaRating ===
                PlanContent[lowerPlanType].rdgaRating
              }
              isAllowed={PlanContent[selectedPlanType].rdgaRating}
            />
            <PlanPart
              text='Участие в РДГА активностях'
              isSame={
                PlanContent[selectedPlanType].rdgaParticipation ===
                PlanContent[lowerPlanType].rdgaParticipation
              }
              isAllowed={PlanContent[selectedPlanType].rdgaParticipation}
            />
            <PlanPart
              text='Доступ к мерчу РДГА'
              isSame={
                PlanContent[selectedPlanType].accessToRdgaMerch ===
                PlanContent[lowerPlanType].accessToRdgaMerch
              }
              isAllowed={PlanContent[selectedPlanType].accessToRdgaMerch}
            />
            <PlanPart
              text='Доступ к отчетности РДГА'
              isSame={
                PlanContent[selectedPlanType].accessToRdgaReport ===
                PlanContent[lowerPlanType].accessToRdgaReport
              }
              isAllowed={PlanContent[selectedPlanType].accessToRdgaReport}
            />
          </div>
        </PlanCardContainer>
        <p style={{ fontSize: '1.2rem' }}>
          Также доступен пакет игрока для новичков, в который входит:
        </p>
        <NewbieCard />
        <div style={{ maxWidth: '80%', width: 'fit-content' }}>
          <p>
            *в данном пакете игрока выбор номера доступен только из
            определенного диапазона;
          </p>
          <p>*диски Prodiscus можно выбрать только в базовом пластике;</p>
          <p>*пакет игрока является обезличенным</p>
        </div>
        <Step>
          2.
          <CustomLink
            route='https://www.tinkoff.ru/cf/6ROmyfvUcO8'
            text='Оплати взнос'
            isExternal
          />
        </Step>
        <Step>
          3.
          <CustomLink
            route='https://docs.google.com/spreadsheets/d/1hCv4gJoCyYuvSqtGRnZ_ovPV_3RmIv71lolvztOxmMk'
            text='Выбери свободный номер*'
            isExternal
          />
        </Step>
        <p>*если ты приобретаешь членство Активный и выше</p>
        <Step>
          4.
          <CustomLink
            route='https://forms.gle/QjCHtVmZXRWkck4e6'
            text='Заполни анкету игрока'
            isExternal
          />
        </Step>
      </PlanContainer>
    </PageContainer>
  );
};

export default About;
