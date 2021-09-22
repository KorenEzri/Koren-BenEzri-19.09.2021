import { Gauge } from 'app/components/Gauge/Loadable';
import styled from 'styled-components/macro';
import { IFullConditions } from 'types';
import { ConditionListItem } from './ConditionListItem/Loadable';

interface Props {
  currentConditions: IFullConditions;
}

export function ConditionsList(props: Props) {
  const { currentConditions } = props;
  console.log(currentConditions);
  return (
    <ConditionListFrame>
      {currentConditions && (
        <>
          <ConditionListItem
            key={`condition_time_key}`}
            name={'Current Time'}
            data={currentConditions.LocalObservationDateTime}
          />
          <ConditionListItem
            key={`condition_uvindex_key}`}
            name={'UV Index'}
            data={currentConditions.UVIndex}
            Component={Gauge}
          />
          <ConditionListItem
            key={`condition_winddirection_key}`}
            name={'Wind direction'}
            data={currentConditions.Wind.Direction.Degrees}
          />
          <ConditionListItem
            key={`condition_windspeed_key}`}
            name={'Wind speed'}
            data={`${currentConditions.Wind.Speed.Metric.UnitType} ${currentConditions.Wind.Speed.Metric.Unit}`}
          />
          <ConditionListItem
            key={`condition_visibility_key}`}
            name={'Visibility'}
            data={`${currentConditions.Visibility.Metric.UnitType} ${currentConditions.Visibility.Metric.Unit}`}
          />
          <ConditionListItem
            key={`condition_humidity_key}`}
            name={'Humidity'}
            data={`${currentConditions.RelativeHumidity}`}
          />
        </>
      )}
    </ConditionListFrame>
  );
}

const ConditionListFrame = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  max-width: 1000px;
  flex-wrap: wrap;
`;
