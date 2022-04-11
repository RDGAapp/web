import styled from 'styled-components';
import PageHeader from 'components/PageHeader';
import ContentContainer from 'components/ContentContainer';
import Text from 'components/Text';
import { FormEvent, useState } from 'react';
import HomeLink from 'components/HomeLink';

const ArticleContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 60px 25px;

  ${({ theme }) => theme.breakpoints.tablet} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 3;
  gap: 32px;
`;

const Header = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  font-family: Inter, sans-serif;
  line-height: 29px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  width: 530px;
  height: 390px;
  padding: 32px;
  font-weight: 600;
  font-size: 24px;
  font-family: Inter, sans-serif;
  line-height: 29px;
  border: 1px solid black;
  border-radius: 20px;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 100%;
  }
`;

const Input = styled.input`
  width: calc(100% - 40px);
  padding: 20px;
  font-weight: 400;
  font-size: 18px;
  font-family: Inter, sans-serif;
  line-height: 18px;
  border: 1px solid #dcdfe6;
  border-radius: 20px;
  transition: all 0.3s ease;

  :focus {
    border: 1px solid black;
    outline: transparent;
  }

  ::placeholder {
    color: #c0c4cc;
  }

  :first-of-type {
    margin-top: 20px;
  }

  :last-of-type {
    margin-bottom: 20px;
  }

  :invalid {
    border: 1px solid red;
  }
`;

const SubmitButton = styled.button<{ color: string }>`
  padding: 16px 24px;
  font-weight: 400;
  font-size: 24px;
  font-family: Oswald, sans-serif;
  line-height: 24px;
  background: ${({ theme, color }) => theme.colors[color]};
  border: 1px solid ${({ theme, color }) => theme.colors[color]};
  border-radius: 40px;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    border: 1px solid black;
  }
`;

const Shop = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [product, setProduct] = useState<string>('');
  const [buttonColor, setButtonColor] = useState<string>('yellow');
  const [showForm] = useState(false);

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    setButtonColor('yellow');
    if (!name || !phone || !product) {
      setButtonColor('red');
      return;
    }
    const result = {
      name, phone, product,
    };
    // eslint-disable-next-line no-console
    console.info(result);
    setButtonColor('green');
    setName('');
    setPhone('');
    setProduct('');
  };

  return (
    <>
      <PageHeader text="Диски для точных попаданий и невероятных траекторий!" />
      <ContentContainer>
        <ArticleContainer>
          <TextContainer>
            <Text>
              Возможно твой первый диск был куплен в спорттоварах или найден на антрисолях,
              в лучшем случае это диск из Декатлона. Начало положено и пора задуматься над
              приобретением диска, который будет следовать твоим желаниям и лететь куда ты хочешь.
              <br />
              Диски ты легко сможешь заказать через интернет либо купить пощупав
              в ближайщем к тебе магазине.
            </Text>
            <Header>{'Товары под заказ:'.toUpperCase()}</Header>
            <Text>
              <ul style={{ margin: 0 }}>
                <li>
                  Диски для игры в диск-гольф;
                </li>
                <li>
                  Корзины для оборудования диск-гольф парков;
                </li>
                <li>
                  Складные, тренировочные корзины для игры в диск-гольф;
                </li>
                <li>
                  Диск-гольф сувениры.
                </li>
              </ul>
            </Text>
            <Header>{'Предоставляемые услуги:'.toUpperCase()}</Header>
            <Text>
              <ul style={{ margin: 0 }}>
                <li>
                  Проведение диск-гольф турниров (семейных, корпоративных, дружеских);
                </li>
                <li>
                  Индивидуальные и групповые тренировки;
                </li>
                <li>
                  Секции.
                </li>
              </ul>
            </Text>
            <Text>
              Наши координаты для заказа указаны внизу страницы.
            </Text>
          </TextContainer>
          {showForm && (
          <Form onSubmit={handleSubmit} id="buy">
            {'Отправить заявку'.toUpperCase()}
            <Input
              id="name"
              placeholder="Имя"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Input
              type="tel"
              title="+7ХХХХХХХХХХ"
              pattern="\+7[0-9]{10}"
              id="phone"
              placeholder="Телефон"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <Input
              placeholder="Заинтересовавший продукт"
              value={product}
              onChange={(event) => setProduct(event.target.value)}
            />
            <SubmitButton type="submit" color={buttonColor}>
              ОТПРАВИТЬ
            </SubmitButton>
          </Form>
          )}
        </ArticleContainer>
        <HomeLink />
      </ContentContainer>
    </>
  );
};

export default Shop;
