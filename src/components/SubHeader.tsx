import styled from 'styled-components';

const Header = styled.h3`
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  margin: 32px 0;
`;

interface SubHeaderProps {
  children: string,
}

const SubHeader = ({ children }: SubHeaderProps): JSX.Element => (
  <Header>{children.toUpperCase()}</Header>
);

export default SubHeader;
