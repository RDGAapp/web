import { Link } from 'react-router-dom';
import { HashLink as HashLinkBrokenTypes } from 'react-router-hash-link';
import { WebTarget } from 'styled-components';

const HashLink = HashLinkBrokenTypes as WebTarget;

export const getTextOrDash = ({
  text,
  link,
  prefix,
  processFn,
}: {
  text?: string | number | null;
  link?: string;
  prefix?: string;
  processFn?: (value: string | number) => string;
}) => {
  if (!text) return '-';

  if (link) {
    const isExternal = !link.startsWith('/');
    const target = isExternal ? '_blank' : '';
    const rel = isExternal ? 'noreferrer' : '';

    if (link.includes('#')) {
      return (
        <HashLink to={link} smooth target={target} rel={rel}>
          {prefix ?? ''}
          {processFn ? processFn(text) : text}
        </HashLink>
      );
    }

    return (
      <Link to={link} target={target} rel={rel}>
        {prefix ?? ''}
        {processFn ? processFn(text) : text}
      </Link>
    );
  }

  return `${prefix ?? ''}${processFn ? processFn(text) : text}`;
};

export const dummyFc = () => {};
