import { ReactNode } from 'react';

import styled from 'styled-components';

const CustomSubHeader = styled.h5`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
`;

const SubHeader = ({ children }: { children: ReactNode }) => (
  <CustomSubHeader>{children}</CustomSubHeader>
);

export default SubHeader;
