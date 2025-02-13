import { ReactNode } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ButtonOutlined from 'components/ButtonOutlined';

const CustomSection = styled(Link)`
  ${ButtonOutlined};
  display: flex;
  gap: 0.5rem;
  align-items: center;

  border-radius: 0.5rem;

  font-size: 1.2rem;

  & svg {
    height: 1rem;
  }
`;

const Section = ({ children, to }: { children: ReactNode; to: string }) => (
  <CustomSection to={to}>{children}</CustomSection>
);

export default Section;
