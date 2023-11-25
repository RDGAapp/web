import { useState } from 'react';

import * as api from 'helpers/api';
import AdminFormLayout from 'pages/Admin/AdminPanelSections/AdminFormLayout';

interface UpdateRatingProps {
  onClose: () => void;
}

interface Rating {
  '#РДГА': number;
  'РДГА рейтинг': number;
}

// for conversion: https://products.aspose.app/cells/conversion/xlsx-to-json
const UpdateRatingJson = ({ onClose }: UpdateRatingProps): JSX.Element => {
  const [newRating, setNewRating] = useState<
    { rdgaNumber: number; rating: number }[]
  >([]);

  const parseJsonFile = async (file: File): Promise<Record<string, any>> =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (event) =>
        resolve(JSON.parse(event.target?.result as string));
      fileReader.onerror = (error) => reject(error);
      fileReader.readAsText(file);
    });

  const onFileChange = async (newFiles: FileList) => {
    const result = await parseJsonFile(newFiles[0]);

    setNewRating(
      result.map((value: Rating) => ({
        rdgaNumber: value['#РДГА'],
        rating: value['РДГА рейтинг'],
      }))
    );
  };

  const inputs = [
    {
      onChange: onFileChange,
      label: 'Файл с рейтингом игроков',
      type: 'file',
      required: true,
      accept: '.json',
    },
  ];

  const onSubmit = async () =>
    Promise.all(
      newRating.map((value) =>
        api.updatePlayerRating(value.rdgaNumber, value.rating)
      )
    );

  return (
    <AdminFormLayout
      header='Обновление рейтинга игроков (json)'
      inputs={inputs}
      onClose={onClose}
      onSubmit={onSubmit}
      additionalContent={
        <a
          href='https://products.aspose.app/cells/ru/conversion/xlsx-to-json'
          target='_blank'
          rel='noreferrer'
        >
          Конвертировать тут
        </a>
      }
    />
  );
};

export default UpdateRatingJson;
