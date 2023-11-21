import { useState } from 'react';

import AdminFormLayout from 'components/Dialogs/AdminPanelSections/AdminFormLayout';
import TournamentType from 'enums/tournamentType';
import { updateTournament, getTournament } from 'helpers/api';

interface UpdateTournamentProps {
  onClose: () => void;
}

const UpdateTournament = ({ onClose }: UpdateTournamentProps): JSX.Element => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [town, setTown] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [tournamentType, setTournamentType] = useState('');
  const [metrixId, setMetrixId] = useState('');

  const inputs = [
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
        { value: TournamentType.League, text: 'Лига' },
        { value: TournamentType.Pro, text: 'Pro тур' },
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
      name,
      town,
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
      tournamentType,
      metrixId: metrixId || null,
    };

    return updateTournament(tournament, code);
  };

  const getAllTournamentDataByCode = async () => {
    const response = await getTournament(code);
    const json = (await response.json()) as Tournament;
    setName(json.name);
    setTown(json.town);
    setStartDate(json.startDate.slice(0, 19));
    setEndDate(json.endDate.slice(0, 19));
    setTournamentType(json.tournamentType);
    setMetrixId(json.metrixId ?? '');

    return response;
  };

  return (
    <>
      <AdminFormLayout
        header='Загрузить данные турнира'
        inputs={[
          {
            value: code,
            onChange: setCode,
            label: 'Код турнира',
            type: 'text',
            required: true,
          },
        ]}
        onClose={onClose}
        onSubmit={getAllTournamentDataByCode}
      />
      <AdminFormLayout
        header='Обновление турнира'
        inputs={inputs}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default UpdateTournament;
