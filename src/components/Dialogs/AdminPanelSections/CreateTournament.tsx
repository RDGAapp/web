import { useState } from 'react';

import AdminFormLayout from 'components/Dialogs/AdminPanelSections/AdminFormLayout';
import TournamentType from 'enums/tournamentType';
import { createTournament } from 'helpers/api';

interface CreateTournamentProps {
  onClose: () => void;
}

const CreateTournament = ({ onClose }: CreateTournamentProps): JSX.Element => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [town, setTown] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [tournamentType, setTournamentType] = useState('');
  const [metrixId, setMetrixId] = useState('');

  const inputs = [
    {
      value: code,
      onChange: setCode,
      label:
        'Код турнира (должен быть уникальным, читай ключ для взаимодействия)',
      type: 'text',
      required: true,
    },
    {
      value: name,
      onChange: setName,
      label: 'Имя',
      type: 'text',
      required: true,
    },
    {
      value: town,
      onChange: setTown,
      label: 'Город',
      type: 'text',
      required: true,
    },
    {
      value: startDate,
      onChange: setStartDate,
      label: 'Дата начала',
      type: 'datetime-local',
      required: true,
    },
    {
      value: endDate,
      onChange: setEndDate,
      label: 'Дата окончания',
      type: 'datetime-local',
      required: true,
    },
    {
      value: tournamentType,
      onChange: setTournamentType,
      label: 'Тип турнира',
      type: 'select',
      required: true,
      variants: [
        { value: TournamentType.AllStar, text: 'Матч Всех Звезд' },
        { value: TournamentType.BagTag, text: 'Bag Tag Challenge' },
        { value: TournamentType.League, text: 'Лига' },
        { value: TournamentType.National, text: 'Национальный тур' },
        { value: TournamentType.Regional, text: 'Региональный турнир' },
        { value: TournamentType.RussianChampionship, text: 'Чемпионат России' },
        { value: TournamentType.Federal, text: 'Федеральный турнир' },
      ],
    },
    {
      value: metrixId,
      onChange: setMetrixId,
      label: 'ID Metrix',
      type: 'text',
      required: false,
    },
  ];

  const onSubmit = async () => {
    const tournament = {
      code,
      name,
      town,
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
      tournamentType,
      metrixId: metrixId || null,
    };

    return createTournament(tournament);
  };

  return (
    <AdminFormLayout
      header='Создание турнира'
      inputs={inputs}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default CreateTournament;
