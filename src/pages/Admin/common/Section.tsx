import { ReactNode } from 'react';

import styled from 'styled-components';

const CustomSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
`;

const Section = ({ children }: { children: ReactNode }) => (
  <CustomSection>{children}</CustomSection>
);

export default Section;
