import styled from 'styled-components';

const Header = styled.h1`
  font-family: '${({ theme }) => theme.fontFamily.header}', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1;
`;

export default Header;
