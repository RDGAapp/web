import styled from 'styled-components';

const Header = styled.h3`
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1;
`;

interface SubHeaderProps {
  children: string,
}

const SubHeader = ({ children }: SubHeaderProps): JSX.Element => (
  <Header>{children.toUpperCase()}</Header>
);

export default SubHeader;
