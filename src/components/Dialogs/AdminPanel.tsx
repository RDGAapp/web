import styled from 'styled-components';

import { ReactComponent as CrossSvg } from 'assets/icons/cross.svg';
import ButtonOutlined from 'components/ButtonOutlined';

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

const Sections = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
`;

const SubHeader = styled.h5`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1;
`;

const Button = styled.button`
  ${ButtonOutlined}
  width: max-content;
`;

interface AdminPanelProps {
  onClose: () => void;
}

const AdminPanel = ({ onClose }: AdminPanelProps): JSX.Element => (
  <>
    <Header>
      Админ консоль
      <CrossSvg height={17} onClick={onClose} />
    </Header>
    <Sections>
      <Section>
        <SubHeader>Действия с игроками</SubHeader>
        <Button type='button'>Создать игрока</Button>
        <Button type='button'>Обновить игрока</Button>
        <Button type='button'>Удалить игрока</Button>
        <Button type='button'>Обновить рейтинг</Button>
      </Section>
      <Section>
        <SubHeader>Действия с турнирами</SubHeader>
        <Button type='button' disabled>
          Создать турнир
        </Button>
        <Button type='button' disabled>
          Обновить турнир
        </Button>
        <Button type='button' disabled>
          Удалить турнир
        </Button>
      </Section>
    </Sections>
  </>
);

export default AdminPanel;
