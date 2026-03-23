import { ReactNode } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import clsx from 'clsx';
import buttonStyles from 'components/Button/styles.module.css';

const CustomSection = styled(Link)`
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
  <CustomSection
    className={clsx(buttonStyles.button, buttonStyles.outlined)}
    to={to}
  >
    {children}
  </CustomSection>
);

export default Section;
