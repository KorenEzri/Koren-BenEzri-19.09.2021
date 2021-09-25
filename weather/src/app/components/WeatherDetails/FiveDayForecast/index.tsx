import styled from 'styled-components/macro';
import { IFiveDayForecast } from 'types';
import { ForecastDayList } from './ForecastDayList/Loadable';

interface Props {
  fiveDayForecast: IFiveDayForecast;
}

export function FiveDayForecast(props: Props) {
  const { fiveDayForecast } = props;
  return (
    <FiveDayForecastFrame>
      <ForecastDayList fiveDayForecast={fiveDayForecast} />
    </FiveDayForecastFrame>
  );
}

const FiveDayForecastFrame = styled.div`
`;
