import { clsx } from 'clsx';
import { ButtonHTMLAttributes, JSX, ReactNode } from 'react';

import styles from './styles.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'outlined' | 'underlined';
}

const Button = ({
  children,
  onClick,
  variant = 'outlined',
  className,
  ...restButtonProps
}: ButtonProps): JSX.Element => (
  <button
    className={clsx(styles.button, className, {
      [styles.outlined]: variant === 'outlined',
      [styles.underlined]: variant === 'underlined',
    })}
    onClick={onClick}
    {...restButtonProps}
  >
    {children}
  </button>
);

export default Button;
