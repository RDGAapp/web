import {
  FormEvent,
  Fragment,
  ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import styled from 'styled-components';

import ButtonOutlined from 'components/ButtonOutlined';
import { Header } from 'components/PageContent';

import Input from './Input';

const Container = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 9.5rem);
`;

const FormsContainer = styled.div`
  overflow: auto;
  height: calc(80vh - 10.5rem);
  padding: 0.5rem 0.25rem;
`;

const PreviewContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
`;

const ConsoleContainer = styled.div`
  overflow: auto;
  grid-column: span 2;

  height: 20vh;
  padding: 0.5rem;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  gap: 0.5rem;
`;

const Button = styled.button`
  ${ButtonOutlined};
  position: sticky;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  width: max-content;
  margin-top: 0.5rem;

  font-size: 1rem;

  border-radius: 0.5rem;
`;

const Error = styled.p`
  font-size: 0.75rem;
  color: red;
`;

const Success = styled.p`
  font-size: 0.75rem;
  color: green;
`;

const Message = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const MessageWithCursor = styled.p`
  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }
  }

  position: relative;
  width: max-content;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.secondary};

  &::after {
    content: '';

    position: absolute;
    right: -0.5rem;

    width: 2px;
    height: 100%;

    background-color: ${({ theme }) => theme.colors.primary};

    animation: blink 1s linear infinite;
  }
`;

interface CreatePlayerProps {
  header: string;
  actionNames: string[];
  forms: any[][];
  onSubmits: (() => Promise<Response>)[];
  preview?: ReactNode;
}

const AdminFormLayout = ({
  header,
  actionNames,
  forms,
  onSubmits,
  preview,
}: CreatePlayerProps): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<
    { date: Date; type: 'error' | 'success' | 'info'; value: string }[]
  >([]);

  const consoleRef = useRef<HTMLDivElement>(null);

  const formIds = (() => {
    const ids: string[] = [];
    forms.forEach(() => {
      ids.push(useId());
    });
    return ids;
  })();

  const addNewMessage = (type: 'info' | 'error' | 'success', value: string) => {
    setMessages((current) => [
      ...current,
      {
        date: new Date(),
        type,
        value,
      },
    ]);
  };

  const handleSubmit = async (event: FormEvent, index: number) => {
    event.preventDefault();
    setLoading(true);
    addNewMessage('info', `Начало действия: ${actionNames[index]}`);

    try {
      const response = await onSubmits[index]();

      try {
        const text = await response.text();
        if (response.ok) {
          addNewMessage('success', `Запрос выполнен успешно: ${text}`);
        } else {
          addNewMessage('error', `Что-то пошло не так: ${text}`);
        }
      } catch (e) {
        if (response.ok) {
          addNewMessage('success', 'Запрос выполнен успешно');
        } else {
          addNewMessage('error', 'Что-то пошло не так');
        }
      }
    } catch (err: any) {
      addNewMessage('error', `Что-то пошло не так: ${err.message}`);
    }
    setLoading(false);
    addNewMessage('info', `Завершение действия: ${actionNames[index]}`);
  };

  useEffect(() => {
    consoleRef.current?.scrollTo({ top: Number.MAX_SAFE_INTEGER });
  }, [messages]);

  return (
    <>
      <Header>{header}</Header>
      <Container>
        <FormsContainer>
          {forms.map((form, index) => (
            <Fragment key={formIds[index]}>
              <Form
                id={formIds[index]}
                onSubmit={(event) => handleSubmit(event, index)}
              >
                {form.map((input) => (
                  <Input
                    key={input.label}
                    label={input.label}
                    value={input.value}
                    onChange={input.onChange}
                    type={input.type}
                    required={input.required}
                    accept={input.accept}
                    variants={input.variants}
                    min={input.min}
                    max={input.max}
                    step={input.step}
                  />
                ))}
              </Form>
              <Button type='submit' form={formIds[index]} disabled={loading}>
                Отправить
              </Button>
            </Fragment>
          ))}
        </FormsContainer>
        <PreviewContainer>{preview ?? 'Нечего показать'}</PreviewContainer>
        <ConsoleContainer ref={consoleRef}>
          {messages.map((message) => {
            const componentsByType = {
              success: Success,
              error: Error,
              info: Message,
            };
            const Component = componentsByType[message.type] ?? Message;

            return (
              <Component key={`${message.date.toISOString()}-${message.type}`}>
                {`[${message.date.toLocaleString()}]: ${message.value}`}
              </Component>
            );
          })}
          <MessageWithCursor>RDGA/Admin:</MessageWithCursor>
        </ConsoleContainer>
      </Container>
    </>
  );
};

export default AdminFormLayout;
