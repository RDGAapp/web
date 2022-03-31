import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin: 0 60px 120px;

  ${({ theme }) => theme.breakpoints.mobile} {
    margin: 0 24px 120px;
  }
`;

interface ContentContainerProps {
  children: JSX.Element | Array<JSX.Element | null | string>,
}

const ContentContainer = ({ children }: ContentContainerProps): JSX.Element => (
  <Content>{children}</Content>
);

export default ContentContainer;
