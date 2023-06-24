import styled from 'styled-components';

const Header = styled.h1`
  font-weight: 400;
  font-size: 2rem;
  font-family: '${({ theme }) => theme.fontFamily.header}', sans-serif;
  line-height: 1;
`;

export default Header;
