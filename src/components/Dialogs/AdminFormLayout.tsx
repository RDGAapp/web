import { FormEvent, useState } from 'react';

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
  onSubmit: () => Promise<Response>;
  onClose: () => void;
}

const AdminFormLayout = ({
  header,
  inputs,
  onSubmit,
  onClose,
}: CreatePlayerProps): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await onSubmit();

      const text = await response.text();
      if (response.ok) {
        setMessage(`Вы успешны: ${text}`);
      } else {
        setError(`Что-то явно не так: ${text}`);
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
        <CrossSvg height={17} onClick={onClose} />
      </Header>
      <Form id='adminForm' onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Input
            key={input.label}
            label={input.label}
            value={input.value}
            onChange={input.onChange}
            type={input.type}
            required={input.required}
          />
        ))}
      </Form>
      <Button type='submit' form='adminForm' disabled={loading}>
        Создать
      </Button>
      {error && <Error>{error}</Error>}
      {message && <Success>{message}</Success>}
    </>
  );
};

export default AdminFormLayout;
