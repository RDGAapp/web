import { ReactNode } from 'react';

import styled from 'styled-components';

const GridContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Block = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0.5rem 0.7rem;
  border-radius: 1.5rem;

  background-color: ${({ theme }) => theme.colors.background};

  transition: all 0.2s ease-in-out;
`;

const Header = styled.h5`
  font-size: 1.5rem;
`;

const WhiteText = styled.div`
  display: grid;
  gap: 0.5rem;
  color: #fff;

  & p {
    font-size: 1rem;
    font-style: italic;
  }

  & ul {
    margin: 0;
  }

  & li::marker {
    content: ' 🥏 ';
  }

  & a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export interface IStepContent {
  backgroundImage: string;
  header: string;
  subheader: string;
  description: string[];
  actionPart: ReactNode;
}

interface Props {
  currentStepContent: IStepContent;
}

const Step = ({ currentStepContent }: Props) => (
  <>
    <GridContainer>
      <Block>
        <Header>{currentStepContent.header}</Header>
        <p>{currentStepContent.subheader}</p>
      </Block>
      <Block>
        {currentStepContent.description.map((description) => (
          <p key={description}>{description}</p>
        ))}
      </Block>
    </GridContainer>
    <GridContainer>
      <WhiteText>{currentStepContent.actionPart}</WhiteText>
    </GridContainer>
  </>
);

export default Step;
