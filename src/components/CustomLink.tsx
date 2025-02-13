import { FunctionComponent, SVGProps } from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled, { RuleSet, WebTarget, css } from 'styled-components';

import ArrowSvg from 'assets/icons/arrow.svg?react';

type TImagePosition = 'left' | 'right';

export const CustomLinkStyles = css<{ $imagePosition?: TImagePosition }>`
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
    ${({ $imagePosition }) => $imagePosition === 'left' && 'left: 2rem;'};
    ${({ $imagePosition }) => $imagePosition === 'right' && 'right: 2rem;'};

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
    ${({ $imagePosition }) => $imagePosition === 'left' && 'left: -1rem;'};
    ${({ $imagePosition }) => $imagePosition === 'right' && 'right: -1rem;'};
    translate: 0 -50%;

    width: 17px;
    height: 17px;

    opacity: 0;

    transition: all 0.2s ease-in-out;
  }

  &:hover,
  &:focus-visible {
    scale: 1.1;
    ${({ $imagePosition }) =>
      $imagePosition === 'left' && 'padding-left: 2rem;'};
    ${({ $imagePosition }) =>
      $imagePosition === 'right' && 'padding-right: 2rem;'};

    &::before {
      width: calc(100% - 2rem);
      opacity: 1;
    }

    & svg {
      pointer-events: all;
      ${({ $imagePosition }) => $imagePosition === 'left' && 'left: 0.5rem;'};
      ${({ $imagePosition }) => $imagePosition === 'right' && 'right: 0.5rem;'};
      opacity: 1;
    }
  }

  &:active {
    scale: 0.9;
  }
`;

interface ILinkProps {
  $styles?: RuleSet;
  $imagePosition?: TImagePosition;
}

const StyledLink = styled(Link)<ILinkProps>`
  ${CustomLinkStyles}
  ${({ $styles }) => $styles}
`;

const StyledHashLink = styled(HashLink as WebTarget)<ILinkProps>`
  ${CustomLinkStyles}
  ${({ $styles }) => $styles}
`;

interface ICustomLinkProps {
  route: string;
  text: string;
  isExternal?: boolean;
  onClick?: () => void;
  CustomImage?: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;
  styles?: RuleSet;
  imagePosition?: TImagePosition;
}

const CustomLink = ({
  route,
  text,
  onClick,
  isExternal = false,
  CustomImage,
  styles,
  imagePosition = 'left',
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
      $imagePosition={imagePosition}
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
      $imagePosition={imagePosition}
    >
      <>
        {CustomImage ? <CustomImage /> : <ArrowSvg />}
        {text}
      </>
    </StyledLink>
  );

export default CustomLink;
