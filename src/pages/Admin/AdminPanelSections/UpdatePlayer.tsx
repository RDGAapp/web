import { useState } from 'react';

import { updatePlayer, getPlayer } from 'helpers/api';
import AdminFormLayout from 'pages/Admin/AdminPanelSections/AdminFormLayout';

interface CreatePlayerProps {
  onClose: () => void;
}

const UpdatePlayer = ({ onClose }: CreatePlayerProps): JSX.Element => {
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
  const [activeTo, setActiveTo] = useState(new Date().getFullYear());

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
    {
      value: activeTo,
      onChange: setActiveTo,
      label: 'Год, до которого активно членство игрока',
      type: 'number',
      min: new Date().getFullYear(),
      step: 1,
      required: true,
    },
  ];

  const onSubmit = async () => {
    const player = {
      name,
      surname: surname || null,
      rdgaRating: Number(rdgaRating) || 0,
      rdgaRatingChange: Number(rdgaRatingChange) || 0,
      town,
      email,
      pdgaNumber: Number(pdgaNumber) || null,
      pdgaRating: Number(pdgaRating) || null,
      metrixNumber: Number(metrixNumber) || null,
      metrixRating: Number(metrixRating) || null,
      priority: Number(priority) || 0,
      activeTo: new Date(`${activeTo}-04-01T00:00:00.000Z`),
    } as Player;

    return updatePlayer(player, Number(rdgaNumber));
  };

  const getAllPlayerDataByRdgaNumber = async () => {
    const response = await getPlayer(Number(rdgaNumber));
    const json = await response.json();
    setName(json.name);
    setSurname(json.surname || '');
    setRdgaRating(json.rdgaRating);
    setRdgaRatingChange(json.rdgaRatingChange);
    setTown(json.town);
    setEmail(json.email);
    setPdgaNumber(json.pdgaNumber || '');
    setPdgaRating(json.pdgaRating || '');
    setMetrixNumber(json.metrixNumber || '');
    setMetrixRating(json.metrixRating || '');
    setPriority(json.priority);
    setActiveTo(new Date(json.activeTo).getFullYear());

    return response;
  };

  return (
    <>
      <AdminFormLayout
        header='Загрузить данные игрока'
        inputs={[
          {
            value: rdgaNumber,
            onChange: setRdgaNumber,
            label: 'Номер РДГА',
            type: 'number',
            required: true,
          },
        ]}
        onClose={onClose}
        onSubmit={getAllPlayerDataByRdgaNumber}
      />
      <AdminFormLayout
        header='Обновление игрока'
        inputs={inputs}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default UpdatePlayer;
