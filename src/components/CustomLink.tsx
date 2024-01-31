import { FunctionComponent, SVGProps } from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled, { RuleSet, css } from 'styled-components';

import { ReactComponent as ArrowSvg } from 'assets/icons/arrow.svg';

const LinkStyles = css`
  position: relative;

  overflow: hidden;

  width: fit-content;
  max-width: 100%;

  font-size: 1.2rem;
  color: inherit;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;

  transition:
    scale 0.2s ease-in-out,
    padding 0.2s ease-in-out;

  &::before {
    content: '';

    position: absolute;
    bottom: 0;
    left: 2rem;

    display: block;

    width: 0;
    height: 2px;

    opacity: 0;
    background-color: currentColor;

    transition: all 0.2s ease-in-out;
  }

  & svg {
    pointer-events: none;

    position: absolute;
    top: 50%;
    left: -1rem;
    translate: 0 -50%;

    width: 17px;
    height: 17px;

    opacity: 0;

    transition: all 0.2s ease-in-out;
  }

  &:hover {
    scale: 1.1;
    padding-left: 2rem;

    &::before {
      width: calc(100% - 2rem);
      opacity: 1;
    }

    & svg {
      pointer-events: all;
      left: 0.5rem;
      opacity: 1;
    }
  }

  &:active {
    scale: 0.9;
  }
`;

const StyledLink = styled(Link)<{ $styles?: RuleSet }>`
  ${LinkStyles}
  ${({ $styles }) => $styles}
`;

const StyledHashLink = styled(HashLink)<{ $styles?: RuleSet }>`
  ${LinkStyles}
  ${({ $styles }) => $styles}
`;

interface ICustomLinkProps {
  route: string;
  text: string;
  isExternal?: boolean;
  onClick?: () => void;
  CustomImage?: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;
  styles?: RuleSet;
}

const CustomLink = ({
  route,
  text,
  onClick,
  isExternal = false,
  CustomImage,
  styles,
}: ICustomLinkProps) =>
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
      <>
        {CustomImage ? <CustomImage /> : <ArrowSvg />}
        {text}
      </>
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
      <>
        {CustomImage ? <CustomImage /> : <ArrowSvg />}
        {text}
      </>
    </StyledLink>
  );

export default CustomLink;
