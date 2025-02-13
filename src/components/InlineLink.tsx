import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled, { RuleSet, WebTarget, css } from 'styled-components';

const LinkStyles = css`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration-color: transparent;
  text-decoration-style: wavy;
  transition: text-decoration-color 0.2s ease-in-out;

  &:hover,
  &:focus-visible {
    text-decoration-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const StyledLink = styled(Link)<{ $styles?: RuleSet }>`
  ${LinkStyles}
  ${({ $styles }) => $styles}
`;

const StyledHashLink = styled(HashLink as WebTarget)<{ $styles?: RuleSet }>`
  ${LinkStyles}
  ${({ $styles }) => $styles}
`;

interface IInlineLinkProps {
  route: string;
  text: string;
  isExternal?: boolean;
  onClick?: () => void;
  styles?: RuleSet;
}

const InlineLink = ({
  route,
  text,
  onClick,
  isExternal = false,
  styles,
}: IInlineLinkProps) =>
  route.includes('#') ? (
    <StyledHashLink
      to={route}
      onClick={() => onClick?.()}
      title={text}
      rel={isExternal ? 'noreferrer' : ''}
      target={isExternal ? '_blank' : ''}
      smooth
      $styles={styles}
    >
      {text}
    </StyledHashLink>
  ) : (
    <StyledLink
      to={route}
      onClick={() => onClick?.()}
      title={text}
      rel={isExternal ? 'noreferrer' : ''}
      target={isExternal ? '_blank' : ''}
      $styles={styles}
    >
      {text}
    </StyledLink>
  );

export default InlineLink;
