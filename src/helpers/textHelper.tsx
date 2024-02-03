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

    return (
      <a
        href={link}
        target={isExternal ? '_blank' : ''}
        rel={isExternal ? 'noreferrer' : ''}
      >
        {prefix ?? ''}
        {processFn ? processFn(text) : text}
      </a>
    );
  }

  return `${prefix ?? ''}${processFn ? processFn(text) : text}`;
};

export const dummyFc = () => {};
