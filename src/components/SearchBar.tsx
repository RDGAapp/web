import { ChangeEvent, useRef } from 'react';

import styled, { css } from 'styled-components';

import SearchSvg from 'assets/icons/search.svg?react';
import useMatchMedia from 'hooks/useMatchMedia';

const ExpandedContainerStyle = css`
  max-width: 100%;

  & input {
    opacity: 1;
  }

  & button {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Container = styled.div<{ $expanded: boolean }>`
  position: relative;

  overflow: hidden;
  display: flex;
  flex-grow: 1;

  max-width: 2.5rem;
  border-radius: 100vh;

  color: ${({ theme }) => theme.colors.text.primary};

  background: ${({ theme }) => theme.colors.lighterBackground};

  transition: max-width 0.2s ease-in-out;

  ${({ $expanded }) => $expanded && ExpandedContainerStyle};

  ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }

  &:focus-within {
    ${ExpandedContainerStyle};
  }
`;

const Input = styled.input`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;

  width: calc(100% - 3rem);
  margin: 0;
  padding: 0.4rem 0 0.4rem 1rem;
  border: none;

  font-size: 1rem;
  line-height: 1.6rem;

  opacity: 0;
  background-color: inherit;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  cursor: pointer;

  z-index: 1;

  aspect-ratio: 1;
  height: 2.4rem;
  margin: 0 0 0 auto;
  padding: 0;
  border: none;
  border-radius: 100vh;

  color: ${({ theme }) => theme.colors.text.primary};

  background: transparent;

  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

interface Props {
  value: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  ariaLabel: string;
}

const SearchBar = ({ value, placeholder, onChange, ariaLabel }: Props) => {
  const { isMobile, isTablet } = useMatchMedia();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container $expanded={!!value || isMobile || isTablet}>
      <Input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label={ariaLabel}
        ref={inputRef}
      />
      <Button type='button' onClick={() => inputRef.current?.focus()}>
        <SearchSvg width={20} />
      </Button>
    </Container>
  );
};

export default SearchBar;
