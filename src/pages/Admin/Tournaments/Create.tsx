import { useState, type JSX } from 'react';

import { createTournament } from 'api';
import Breadcrumbs from 'components/Breadcrumbs';
import TournamentNameByType from 'helpers/tournament/typeNameByType';
import AdminFormLayout from 'pages/Admin/common/AdminFormLayout';
import { TournamentType } from 'types/db';

import Preview from './Preview';

const CreateTournament = (): JSX.Element => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [town, setTown] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [tournamentType, setTournamentType] = useState<TournamentType>(
    TournamentType.League,
  );
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
      min: '1900-01-01T00:00',
      max: '9999-12-31T23:59',
    },
    {
      value: endDate,
      onChange: setEndDate,
      label: 'Дата окончания',
      type: 'datetime-local',
      required: true,
      min: '1900-01-01T00:00',
      max: '9999-12-31T23:59',
    },
    {
      value: tournamentType,
      onChange: setTournamentType,
      label: 'Тип турнира',
      type: 'select',
      required: true,
      variants: [
        TournamentType.League,
        TournamentType.Pro,
        TournamentType.RussianChampionship,
        TournamentType.Federal,
      ].map((type) => ({ value: type, text: TournamentNameByType[type] })),
    },
    {
      value: metrixId,
      onChange: setMetrixId,
      label: 'ID Metrix',
      type: 'text',
      required: false,
    },
  ];

  const tournament = {
    code,
    name,
    town,
    startDate: (startDate ? new Date(startDate) : new Date()).toISOString(),
    endDate: (endDate ? new Date(endDate) : new Date()).toISOString(),
    tournamentType,
    metrixId: metrixId || null,
  };

  const onSubmit = async () => createTournament(tournament);

  return (
    <>
      <Breadcrumbs />
      <AdminFormLayout
        header='Создание турнира'
        actionNames={['Создание турнира']}
        forms={[inputs]}
        onSubmits={[onSubmit]}
        preview={<Preview tournament={tournament} />}
      />
    </>
  );
};

export default CreateTournament;
