import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 0 0 3rem;
`;

interface ContentContainerProps {
  children: JSX.Element | Array<JSX.Element | null | string>,
}

const ContentContainer = ({ children }: ContentContainerProps): JSX.Element => (
  <Content>{children}</Content>
);

export default ContentContainer;
