import { FormEvent, ReactNode, useId, useState } from 'react';

import styled from 'styled-components';

import { ReactComponent as CrossSvg } from 'assets/icons/cross.svg';
import ButtonOutlined from 'components/ButtonOutlined';
import Input from 'components/Dialogs/Input';

const Header = styled.h1`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 2rem;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1;

  svg {
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    :hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;
`;

const Button = styled.button`
  ${ButtonOutlined};
  margin-top: 2rem;
  font-size: 1rem;
`;

const Error = styled.p`
  color: red;
  font-size: 1rem;
`;

const Success = styled.p`
  color: green;
  font-size: 1rem;
`;

interface CreatePlayerProps {
  header: string;
  inputs: any[];
  onSubmit: () => Promise<Response | Response[]>;
  additionalContent?: ReactNode;
  onClose?: () => void;
}

const AdminFormLayout = ({
  header,
  inputs,
  additionalContent,
  onSubmit,
  onClose,
}: CreatePlayerProps): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const formId = useId();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    setErrors([]);
    setMessages([]);

    try {
      const response = await onSubmit();

      if (Array.isArray(response)) {
        response.forEach(async (value) => {
          const text = await value.text();
          if (value.ok) {
            setMessages((previous) => [...previous, text]);
          } else {
            setErrors((previous) => [...previous, text]);
          }
        });
      } else {
        const text = await response.text();
        if (response.ok) {
          setMessage(`Вы успешны: ${text}`);
        } else {
          setError(`Что-то явно не так: ${text}`);
        }
      }
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Header>
        {header}
        {onClose && <CrossSvg height={17} onClick={onClose} />}
      </Header>
      {additionalContent}
      <Form id={formId} onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Input
            key={input.label}
            label={input.label}
            value={input.value}
            onChange={input.onChange}
            type={input.type}
            required={input.required}
            accept={input.accept}
          />
        ))}
      </Form>
      <Button type='submit' form={formId} disabled={loading}>
        Отправить
      </Button>
      {error && <Error>{error}</Error>}
      {errors.map((errorString) => (
        <Error key={errorString}>{errorString}</Error>
      ))}
      {message && <Success>{message}</Success>}
      {messages.map((successString) => (
        <Success key={successString}>{successString}</Success>
      ))}
    </>
  );
};

export default AdminFormLayout;
