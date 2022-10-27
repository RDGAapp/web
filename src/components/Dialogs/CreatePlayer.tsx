import { FormEvent, useState } from 'react';

import styled from 'styled-components';

import { ReactComponent as CrossSvg } from 'assets/icons/cross.svg';
import ButtonOutlined from 'components/ButtonOutlined';
import Input from 'components/Dialogs/Input';
import { createPlayer } from 'helpers/api';

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
  onClose: () => void;
}

const CreatePlayer = ({ onClose }: CreatePlayerProps): JSX.Element => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [rdgaNumber, setRdgaNumber] = useState('');
  const [rdgaRating, setRdgaRating] = useState('');
  const [rdgaRatingChange, setRdgaRatingChange] = useState('0');
  const [town, setTown] = useState('');
  const [email, setEmail] = useState('');
  const [pdgaNumber, setPdgaNumber] = useState('');
  const [pdgaRating, setPdgaRating] = useState('');
  const [metrixNumber, setMetrixNumber] = useState('');
  const [metrixRating, setMetrixRating] = useState('');
  const [priority, setPriority] = useState('0');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const inputs = [
    {
      value: name,
      onChange: setName,
      label: 'Имя',
      type: 'text',
      required: true,
    },
    {
      value: surname,
      onChange: setSurname,
      label: 'Фамилия',
      type: 'text',
    },
    {
      value: rdgaNumber,
      onChange: setRdgaNumber,
      label: 'Номер РДГА',
      type: 'number',
      required: true,
    },
    {
      value: rdgaRating,
      onChange: setRdgaRating,
      label: 'Рейтинг РДГА',
      type: 'number',
    },
    {
      value: rdgaRatingChange,
      onChange: setRdgaRatingChange,
      label: 'Изменения рейтинга РДГА',
      type: 'number',
    },
    {
      value: town,
      onChange: setTown,
      label: 'Город',
      type: 'text',
      required: true,
    },
    {
      value: email,
      onChange: setEmail,
      label: 'Email',
      type: 'email',
      required: true,
    },
    {
      value: pdgaNumber,
      onChange: setPdgaNumber,
      label: 'Номер PDGA',
      type: 'number',
    },
    {
      value: pdgaRating,
      onChange: setPdgaRating,
      label: 'Рейтинг PDGA',
      type: 'number',
    },
    {
      value: metrixNumber,
      onChange: setMetrixNumber,
      label: 'Номер Metrix',
      type: 'number',
    },
    {
      value: metrixRating,
      onChange: setMetrixRating,
      label: 'Рейтинг Metrix',
      type: 'number',
    },
    {
      value: priority,
      onChange: setPriority,
      label: 'Приоритет (пока что не используется, на вырост)',
      type: 'number',
    },
  ];

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const player = {
      name,
      surname: surname || null,
      rdgaNumber: Number(rdgaNumber),
      rdgaRating: Number(rdgaRating) || 0,
      rdgaRatingChange: Number(rdgaRatingChange) || 0,
      town,
      email,
      pdgaNumber: Number(pdgaNumber) || null,
      pdgaRating: Number(pdgaRating) || null,
      metrixNumber: Number(metrixNumber) || null,
      metrixRating: Number(metrixRating) || null,
      priority: Number(priority) || 0,
    } as Player;

    try {
      const response = await createPlayer(player);

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
        Создание игрока
        <CrossSvg height={17} onClick={onClose} />
      </Header>
      <Form id='adminForm' onSubmit={onSubmit}>
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

export default CreatePlayer;
