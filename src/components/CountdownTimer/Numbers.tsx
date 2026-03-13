import { spell } from 'helpers/wordHelpers';

import styles from './styles.module.css';

const formatNumber = (number: number) => String(number).padStart(2, '0');

interface INumbersProps {
  value: number;
  words: [string, string, string];
}

const Numbers = ({ value, words }: INumbersProps) => (
  <div className={styles.numbers}>
    <p>{formatNumber(value)}</p>
    <p>{spell(value, words)}</p>
  </div>
);

export default Numbers;
