import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 60px 120px;
  gap: 24px;

  ${({ theme }) => theme.breakpoints.mobile} {
    margin: 0 24px 120px;
  }
`;

interface ContentContainerProps {
  children: JSX.Element | JSX.Element[],
}

const ContentContainer = ({ children }: ContentContainerProps): JSX.Element => (
  <Content>{children}</Content>
);

export default ContentContainer;
