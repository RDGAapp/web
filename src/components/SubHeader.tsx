import styled from 'styled-components';

const Header = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  font-family: Inter, sans-serif;
  line-height: 29px;
`;

interface SubHeaderProps {
  children: string,
}

const SubHeader = ({ children }: SubHeaderProps): JSX.Element => (
  <Header>{children.toUpperCase()}</Header>
);

export default SubHeader;
