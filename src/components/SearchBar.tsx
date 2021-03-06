import { ChangeEvent, useRef } from 'react';

import styled, { css } from 'styled-components';

import { ReactComponent as SearchSvg } from 'assets/icons/search.svg';
import useMatchMedia from 'hooks/useMatchMedia';

const ExpandedContainerStyle = css`
  max-width: 100%;

  input {
    opacity: 1;
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Container = styled.div<{expanded: boolean}>`
  position: relative;
  display: flex;
  flex-grow: 1;
  max-width: 2.5rem;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 100vh;
  transition: max-width 0.3s ease-in-out;
  ${({ expanded }) => expanded && ExpandedContainerStyle};

  ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }

  :focus-within {
    ${ExpandedContainerStyle};
  }
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: calc(100% - 3rem);
  margin: 0;
  padding: 0.4rem 0 0.4rem 1rem;
  font-size: 1rem;
  line-height: 1.6rem;
  background-color: ${({ theme }) => theme.background};
  border: none;
  opacity: 0;

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  z-index: 1;
  height: 2.4rem;
  aspect-ratio: 1;
  margin: 0 0 0 auto;
  padding: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  background: transparent;
  border: none;
  border-radius: 100vh;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

interface Props {
  value: string,
  placeholder: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  ariaLabel: string,
}

const SearchBar = ({
  value, placeholder, onChange, ariaLabel,
}: Props) => {
  const { isMobile, isTablet } = useMatchMedia();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container expanded={!!value || isMobile || isTablet}>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label={ariaLabel}
        ref={inputRef}
      />
      <Button type="button" onClick={() => inputRef.current?.focus()}>
        <SearchSvg width={20} />
      </Button>
    </Container>
  );
};

export default SearchBar;
