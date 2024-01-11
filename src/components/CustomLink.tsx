import { FunctionComponent, SVGProps } from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled, { RuleSet, css } from 'styled-components';

import { ReactComponent as ArrowSvg } from 'assets/icons/arrow.svg';

const LinkStyles = css`
  position: relative;
  width: fit-content;
  max-width: 100%;
  overflow: hidden;
  color: inherit;
  font-size: 1.2rem;
  white-space: nowrap;
  text-decoration: none;
  text-overflow: ellipsis;
  transition:
    scale 0.2s ease-in-out,
    padding 0.2s ease-in-out;

  & svg {
    position: absolute;
    top: 50%;
    left: -1rem;
    width: 17px;
    height: 17px;
    translate: 0 -50%;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    pointer-events: none;
  }

  &::before {
    position: absolute;
    bottom: 0;
    left: 2rem;
    display: block;
    width: 0;
    height: 2px;
    background-color: currentColor;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    content: '';
  }

  &:hover {
    padding-left: 2rem;
    scale: 1.1;

    & svg {
      left: 0.5rem;
      opacity: 1;
      pointer-events: all;
    }

    &::before {
      width: calc(100% - 2rem);
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
