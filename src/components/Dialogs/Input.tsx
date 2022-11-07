import { ChangeEvent, InputHTMLAttributes } from 'react';

import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const CustomInput = styled.input`
  padding: 0.2rem 0.6rem;
  border: 1px solid black;
  border-radius: 1rem;

  &:invalid {
    border-color: red;
  }
`;

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  onChange: (value: any) => void;
}

const Input = ({ label, onChange, ...props }: Props) => (
  <Label>
    {label}:
    <CustomInput
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        props.type === 'file' ? onChange(event.target.files) : onChange(event.target.value)
      }
      value={props.value}
      required={props.required}
      type={props.type}
    />
  </Label>
);

export default Input;
