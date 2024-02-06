import { MouseEventHandler, useCallback, useRef } from 'react';

import styled from 'styled-components';

import { ReactComponent as SportCategorySvg } from 'assets/icons/sportsCategoryPin.svg';
import {
  SportsCategoryColorByCategory,
  SportsCategoryTextColorByCategory,
} from 'helpers/player/sportCategoryColors';
import SportsCategoryNameByCategory from 'helpers/player/sportsCategoryNameByCategory';
import { IPlayer } from 'types/player';

import CommonBadgeStyle from './CommonBadgeStyle';

const Container = styled.div<{ textColor: string; color: string }>`
  ${CommonBadgeStyle}
  isolation: isolate;
  position: relative;
  transform-style: preserve-3d;

  display: flex;
  grid-column: span 3;
  grid-row: span 3;
  align-items: center;
  justify-content: center;

  color: ${({ theme, color }) => theme.colors[color]};

  perspective: 20rem;
  background-color: transparent;

  & > div {
    isolation: isolate;
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.2s ease-in-out;
  }

  & svg {
    width: 10rem;
  }

  & p {
    position: absolute;
    left: 50%;
    translate: -50%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    line-height: 1;
    color: ${({ theme, textColor }) => theme.colors[textColor]};
    text-align: center;
    text-transform: uppercase;
  }

  ${({ theme }) => theme.media.tablet} {
    grid-column: span 4;
  }

  ${({ theme }) => theme.media.mobile} {
    grid-column: span 1;
    grid-row: span 1;
    grid-row-start: 2;
  }
`;

const SportsCategoryName = styled.p`
  bottom: 1.3rem;
  width: 8rem;
  height: 1.6rem;
  font-size: 0.6rem;
`;

const RdgaText = styled.p`
  top: 0.3rem;
  width: 6.5rem;
  height: 1rem;
  font-size: 0.4rem;
`;

const Shine = styled.div`
  pointer-events: none;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: radial-gradient(
    farthest-corner circle at 50% 50%,
    hsla(0deg 0% 100% / 40%) 10%,
    hsla(0deg 0% 100% / 25%) 20%,
    hsla(0deg 0% 100% / 0%) 50%
  );
`;

interface ISportsCategory {
  sportsCategory: IPlayer['sportsCategory'];
}

const maxRotate = 20;

const SportsCategoryBadge = ({ sportsCategory }: ISportsCategory) => {
  const elementRef = useRef<HTMLDivElement>(null);

  if (!sportsCategory) return undefined;

  const onMouseOver: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (!elementRef.current) return;

      const box = elementRef.current.getBoundingClientRect();
      const x = event.clientX - box.left;
      const y = event.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateXPercentage = (2 * (centerY - y)) / box.height;
      const rotateYPercentage = (2 * (x - centerX)) / box.width;
      const rotateX = maxRotate * rotateXPercentage;
      const rotateY = maxRotate * rotateYPercentage;
      elementRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    },
    [],
  );

  const onMouseLeave: MouseEventHandler<HTMLDivElement> = useCallback(() => {
    if (elementRef.current) {
      elementRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  }, []);

  return (
    <Container
      color={SportsCategoryColorByCategory[sportsCategory]}
      textColor={SportsCategoryTextColorByCategory[sportsCategory]}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div ref={elementRef}>
        <RdgaText>Российская Диск-Гольф Ассоциация</RdgaText>
        <SportCategorySvg />
        <SportsCategoryName>
          {SportsCategoryNameByCategory[sportsCategory]}
        </SportsCategoryName>
        <Shine />
      </div>
    </Container>
  );
};

export default SportsCategoryBadge;
