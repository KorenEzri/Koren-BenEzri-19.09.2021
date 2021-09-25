import styled from 'styled-components/macro';
import { IFullConditions } from 'types';
import { ConditionsList } from './ConditionsList/Loadable';

interface Props {
  currentConditions: IFullConditions[];
}

export function CurrentWeather(props: Props) {
  const { currentConditions } = props;

  return currentConditions ? (
    <CurrentConditionsFrame>
      <CurrentConditionsTitle>The weather today</CurrentConditionsTitle>
      <ConditionsList currentConditions={currentConditions[0]} />
    </CurrentConditionsFrame>
  ) : null;
}

const CurrentConditionsFrame = styled.div`
  margin-top: 60px;
`;
const CurrentConditionsTitle = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin: 12px;
`;
