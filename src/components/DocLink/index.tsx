import FileSvg from 'assets/icons/file.svg?react';
import getFileUrl from 'helpers/getFileUrl';

import styles from './styles.module.css';

interface IDocLink {
  fileUrl: string;
  fileName: string;
  text: string;
}

const DocLink = ({ fileUrl, fileName, text }: IDocLink) => (
  <a
    className={styles['doc-link']}
    href={getFileUrl(fileUrl)}
    download={fileName}
  >
    <FileSvg width={24} height={24} />
    {text}
  </a>
);

export default DocLink;
