import { useState } from 'react';

import Breadcrumbs from 'components/Breadcrumbs';
import SportsCategory from 'enums/sportsCategory';
import { createPlayer } from 'helpers/api';
import SportsCategoryNameByCategory from 'helpers/player/sportsCategoryNameByCategory';
import AdminFormLayout from 'pages/Admin/common/AdminFormLayout';
import Card from 'pages/Players/Card';
import { IPlayer } from 'types/player';

const CreatePlayer = (): JSX.Element => {
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
  const [sportsCategory, setSportsCategory] = useState<SportsCategory | null>(
    null,
  );

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
    {
      value: sportsCategory,
      onChange: setSportsCategory,
      label: 'Спортивный разряд',
      type: 'select',
      variants: [
        { value: null, text: '' },
        ...[
          SportsCategory.Master,
          SportsCategory.Candidate,
          SportsCategory.AdultFirst,
          SportsCategory.AdultSecond,
          SportsCategory.AdultThird,
          SportsCategory.JuniorFirst,
          SportsCategory.JuniorSecond,
          SportsCategory.JuniorThird,
        ].map((category) => ({
          value: category,
          text: SportsCategoryNameByCategory[category],
        })),
      ],
    },
  ];

  const player = {
    name,
    surname: surname || null,
    rdgaNumber: Number(rdgaNumber),
    rdgaRating: Number(rdgaRating) || 0,
    rdgaRatingChange: Number(rdgaRatingChange) || 0,
    town,
    email,
    pdgaNumber: Number(pdgaNumber) || null,
    metrixNumber: Number(metrixNumber) || null,
    priority: Number(priority) || 0,
    activeTo: `${activeTo}-04-01T00:00:00.000Z`,
    sportsCategory,
  } as IPlayer;

  const onSubmit = async () => createPlayer(player);

  return (
    <>
      <Breadcrumbs />
      <AdminFormLayout
        header='Создание игрока'
        actionNames={['Создание игрока']}
        forms={[inputs]}
        onSubmits={[onSubmit]}
        preview={<Card player={player} />}
      />
    </>
  );
};

export default CreatePlayer;
