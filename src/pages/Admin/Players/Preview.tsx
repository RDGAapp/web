import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import Card from 'pages/Players/Card';
import SelectedCard from 'pages/Players/SelectedCard';

interface IPreview {
  player: Player;
}

const Preview = ({ player }: IPreview) => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Card player={player} setSelected={() => setSelected(true)} />
      <AnimatePresence>
        {selected && (
          <SelectedCard
            selected={player}
            resetSelected={() => setSelected(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Preview;
