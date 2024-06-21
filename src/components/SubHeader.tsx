import styled from 'styled-components';

const Header = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1;
`;

interface SubHeaderProps {
  children: string;
  id?: string;
}

const SubHeader = ({ children, id }: SubHeaderProps): JSX.Element => (
  <Header id={id}>{children}</Header>
);

export default SubHeader;
