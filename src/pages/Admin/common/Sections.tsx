import { ReactNode } from 'react';

import styled from 'styled-components';

const CustomSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const Section = ({ children }: { children: ReactNode }) => (
  <CustomSection>{children}</CustomSection>
);

export default Section;
