import styled from 'styled-components';

import { ReactComponent as FileSvg } from 'assets/icons/file.svg';
import getFileUrl from 'helpers/getFileUrl';

const Container = styled.a`
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  align-items: center;

  width: max-content;
  max-width: 100%;

  line-height: 1;
  text-decoration-color: transparent;
  text-decoration-style: wavy;

  transition: text-decoration-color 0.2s ease-in-out;

  &:hover,
  &:focus-visible {
    text-decoration-color: currentColor;
  }

  ${({ theme }) => theme.media.mobile} {
    justify-content: center;
    margin: auto;
    text-align: center;
  }
`;

interface IDocLink {
  fileUrl: string;
  fileName: string;
  text: string;
}

const DocLink = ({ fileUrl, fileName, text }: IDocLink) => (
  <Container href={getFileUrl(fileUrl)} download={fileName}>
    <FileSvg width={24} height={24} />
    {text}
  </Container>
);

export default DocLink;
