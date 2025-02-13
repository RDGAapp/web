import styled from 'styled-components';

import Logo from 'components/Logo';
import useMatchMedia from 'hooks/useMatchMedia';

import type { JSX } from "react";

const PrimaryBackground = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  max-width: 72rem;
  margin: auto;
  padding: 1rem;

  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
  }
`;

const Copyright = styled.p`
  align-self: flex-end;
  font-size: 0.7rem;
  line-height: 1;

  & a {
    font-size: 0.7rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration-color: transparent;
    text-decoration-style: wavy;

    transition: text-decoration-color 0.2s linear;

    &:hover,
    &:focus-visible {
      text-decoration-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  ${({ theme }) => theme.media.tablet} {
    align-self: center;
  }
`;

const CopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Footer = (): JSX.Element => {
  const { isDesktop } = useMatchMedia();
  return (
    <PrimaryBackground>
      <Container>
        <Logo big={isDesktop} />
        <CopyrightContainer>
          <Copyright>© Федерация Флаинг Диска Свердловской области</Copyright>
          <Copyright>
            Наши соц сети:{' '}
            <a href='https://vk.com/discgolf' rel='noreferrer' target='_blank'>
              ВКонтакте
            </a>
            {', '}
            <a
              href='https://t.me/discgolf_russia'
              rel='noreferrer'
              target='_blank'
            >
              Telegram
            </a>
          </Copyright>
        </CopyrightContainer>
      </Container>
    </PrimaryBackground>
  );
};

export default Footer;
