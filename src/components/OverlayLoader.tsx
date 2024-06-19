import React from 'react';

import styled from 'styled-components';

import LogoLoader from 'components/LogoLoader';

const Container = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;

  display: grid;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: color-mix(
    in hsl,
    ${({ theme }) => theme.colors.background},
    transparent 40%
  );
`;

interface Props {
  children: React.ReactNode;
  loading: boolean;
}

const OverlayLoader = ({ children, loading }: Props) => (
  <Container>
    {loading && (
      <Overlay>
        <LogoLoader />
      </Overlay>
    )}
    {children}
  </Container>
);

export default OverlayLoader;
