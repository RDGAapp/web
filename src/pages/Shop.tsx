import styled from 'styled-components';
import PageHeader from 'components/PageHeader';
import ContentContainer from 'components/ContentContainer';
import Text from 'components/Text';
import { FormEvent, useState } from 'react';

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 60px 25px;

  ${({ theme }) => theme.breakpoints.tablet} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 60%;
  gap: 32px;

  ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 100%;
  }
`;

const Header = styled.h3`
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  margin: 0;
`;

const Form = styled.form`
  width: 530px;
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  border: 1px solid black;
  border-radius: 20px;
  padding: 32px;
  gap: 20px;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 100%;
  }
`;

const Input = styled.input`
  width: calc(100% - 40px);
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #DCDFE6;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  transition: all 0.3s ease;

  :focus {
    outline: transparent;
    border: 1px solid black;
  }

  ::placeholder {
    color: #C0C4CC;
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
  background: ${({ theme, color }) => theme.colors[color]};
  border: 1px solid ${({ theme, color }) => theme.colors[color]};
  border-radius: 40px;
  font-family: Oswald, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  padding: 16px 24px;
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
  function handleSubmit(event: FormEvent): void {
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
  }
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
        </ArticleContainer>
      </ContentContainer>
    </>
  );
};

export default Shop;
