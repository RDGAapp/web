import { createGlobalStyle, css } from 'styled-components';

// https://piccalil.li/blog/a-modern-css-reset/
const ModernCssReset = css`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    scroll-margin-top: 6rem;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  li {
    text-align: left;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    display: block;
    max-width: 100%;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  ${ModernCssReset}

  * {
    color: inherit;
    font-size: 20px;
    font-family: "${({ theme }) => theme.fontFamily.primary}", sans-serif;

    ${({ theme }) => theme.media.mobile} {
      font-size: 16px;
    }
  }

  body {
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  #root {
    background-color: ${({ theme }) => theme.colors.background};
  }

  svg {
    flex-shrink: 0;
    height: 100%;
    aspect-ratio: 1 / 1;
  }

  ul, ol {
    margin: 0;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.8rem;
  }

  h6 {
    font-size: 0.7rem;
  }
`;

export default GlobalStyle;
