import { CSSProperties } from 'react';

import AvatarSvg from 'assets/icons/avatar.svg?url';

import styles from './styles.module.css';

interface IAvatarProps {
  imageSrc?: string | null;
  disabled?: boolean;
  style?: CSSProperties;
}

const Avatar = ({ disabled, imageSrc, style }: IAvatarProps) => (
  <div
    id='avatar'
    className={styles.background}
    data-disabled={disabled ?? false}
    data-image={`url(${imageSrc ?? AvatarSvg})`}
    style={style}
  />
);

export default Avatar;
