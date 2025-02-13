import { useState, type JSX } from 'react';

import { updatePlayer, getPlayer } from 'api';
import Breadcrumbs from 'components/Breadcrumbs';
import SportsCategoryNameByCategory from 'helpers/player/sportsCategoryNameByCategory';
import AdminFormLayout from 'pages/Admin/common/AdminFormLayout';
import Card from 'pages/Players/Card';
import { SportsCategory } from 'types/db';
import { IBasePlayer } from 'types/player';

const UpdatePlayer = (): JSX.Element => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [rdgaNumber, setRdgaNumber] = useState('');
  const [rdgaRating, setRdgaRating] = useState('');
  const [rdgaRatingChange, setRdgaRatingChange] = useState('0');
  const [town, setTown] = useState('');
  const [pdgaNumber, setPdgaNumber] = useState('');
  const [metrixNumber, setMetrixNumber] = useState('');
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

  const player: Omit<IBasePlayer, 'rdgaNumber'> = {
    name,
    surname: surname || null,
    rdgaRating: Number(rdgaRating) || 0,
    rdgaRatingChange: Number(rdgaRatingChange) || 0,
    town,
    pdgaNumber: Number(pdgaNumber) || null,
    metrixNumber: Number(metrixNumber) || null,
    activeTo: `${activeTo}-01-01T00:00:00.000Z`,
    sportsCategory,
  };

  const onSubmit = async () => updatePlayer(player, Number(rdgaNumber));

  const getAllPlayerDataByRdgaNumber = async () => {
    const response = await getPlayer(Number(rdgaNumber));
    const json = await response.json();
    setName(json.name);
    setSurname(json.surname || '');
    setRdgaRating(json.rdgaRating);
    setRdgaRatingChange(json.rdgaRatingChange);
    setTown(json.town);
    setPdgaNumber(json.pdgaNumber || '');
    setMetrixNumber(json.metrixNumber || '');
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
          <Card
            player={{
              ...player,
              rdgaNumber: Number(rdgaNumber),
              avatarUrl: 'https://rdga.ru/files/cherkasik/mem.webp',
            }}
          />
        }
      />
    </>
  );
};

export default UpdatePlayer;
