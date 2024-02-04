import { useState } from 'react';

import Breadcrumbs from 'components/Breadcrumbs';
import { updatePlayer, getPlayer } from 'helpers/api';
import AdminFormLayout from 'pages/Admin/common/AdminFormLayout';
import { IPlayer } from 'types/player';

import Preview from './Preview';

const UpdatePlayer = (): JSX.Element => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [rdgaNumber, setRdgaNumber] = useState('');
  const [rdgaRating, setRdgaRating] = useState('');
  const [rdgaRatingChange, setRdgaRatingChange] = useState('0');
  const [town, setTown] = useState('');
  const [email, setEmail] = useState('');
  const [pdgaNumber, setPdgaNumber] = useState('');
  const [metrixNumber, setMetrixNumber] = useState('');
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
      value: metrixNumber,
      onChange: setMetrixNumber,
      label: 'Номер Metrix',
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

  const player = {
    name,
    surname: surname || null,
    rdgaRating: Number(rdgaRating) || 0,
    rdgaRatingChange: Number(rdgaRatingChange) || 0,
    town,
    email,
    pdgaNumber: Number(pdgaNumber) || null,
    metrixNumber: Number(metrixNumber) || null,
    priority: Number(priority) || 0,
    activeTo: `${activeTo}-04-01T00:00:00.000Z`,
  } as IPlayer;

  const onSubmit = async () => updatePlayer(player, Number(rdgaNumber));

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
    setMetrixNumber(json.metrixNumber || '');
    setPriority(json.priority);
    setActiveTo(new Date(json.activeTo).getFullYear());

    return response;
  };

  return (
    <>
      <Breadcrumbs />
      <AdminFormLayout
        header='Обновление игрока'
        actionNames={['Загрузить данные игрока', 'Обновление игрока']}
        forms={[
          [
            {
              value: rdgaNumber,
              onChange: setRdgaNumber,
              label: 'Номер РДГА',
              type: 'number',
              required: true,
            },
          ],
          inputs,
        ]}
        onSubmits={[getAllPlayerDataByRdgaNumber, onSubmit]}
        preview={
          <Preview player={{ ...player, rdgaNumber: Number(rdgaNumber) }} />
        }
      />
    </>
  );
};

export default UpdatePlayer;
