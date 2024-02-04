import { ReactElement } from 'react';

import styled from 'styled-components';

import { getTextOrDash } from 'helpers/textHelper';
import { IPlayerExtended } from 'types/player';

import CommonBadgeStyle from './CommonBadgeStyle';

const Container = styled.div<{ $color?: string }>`
  ${CommonBadgeStyle}
  isolation: isolate;
  position: relative;

  overflow: hidden;
  grid-column: span 1;
  grid-row: span 1;

  ${({ theme, $color }) =>
    $color && `background-color: ${theme.colors[$color]}`};

  & > img,
  & > svg {
    position: absolute;
    z-index: -1;
    top: 75%;
    right: -2rem;
    transform: translateY(-50%);
  }

  & > img {
    height: 100%;
  }

  & > svg {
    height: 150%;
  }
`;

const ActiveToDate = styled.p`
  &,
  & > a {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1;
  }

  & > a {
    text-decoration-color: transparent;
    text-decoration-style: wavy;
    transition: all 0.2s linear;

    &:hover,
    &:focus-visible {
      text-decoration-color: hsl(217deg 84% 45%);
    }
  }
`;

interface ISubscriptionInfo {
  activeTo?: IPlayerExtended['activeTo' | 'pdgaActiveTo'];
  logo: ReactElement;
  link?: string;
}

const getBackgroundColor = (activeTo?: ISubscriptionInfo['activeTo']) => {
  if (!activeTo) return undefined;

  const date = new Date(activeTo);
  const now = new Date();

  if (now >= date) return 'error';

  date.setMonth(date.getMonth() - 1);

  if (now >= date) return 'warn';

  return 'success';
};

const SubscriptionInfo = ({ activeTo, logo, link }: ISubscriptionInfo) => (
  <Container $color={getBackgroundColor(activeTo)}>
    {logo}
    <p>Активен до</p>
    <ActiveToDate>
      {getTextOrDash({
        text: activeTo,
        link,
        processFn: (value) =>
          new Date(value).toLocaleDateString(undefined, {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          }),
      })}
    </ActiveToDate>
  </Container>
);

export default SubscriptionInfo;
