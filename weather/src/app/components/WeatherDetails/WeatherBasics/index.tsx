import React from 'react';
import styled from 'styled-components/macro';
import { IFullConditions } from 'types';
import { getDayOfWeek, loadImage } from 'utils';

interface Props {
  currentConditions: IFullConditions;
}

export function WeatherBasics(props: Props) {
  const [icon, setIcon] = React.useState<number>();
  const [day, setDay] = React.useState<string>();
  const [time, setTime] = React.useState<string>();

  const { currentConditions } = props;
  React.useEffect(() => {
    const iconAsNumber = currentConditions?.WeatherIcon;
    const dayOfTheWeek = getDayOfWeek(
      new Date(currentConditions?.LocalObservationDateTime),
    );
    const time = new Date(currentConditions?.LocalObservationDateTime)
      .toTimeString()
      .split(' ')[0];

    setIcon(iconAsNumber);
    setDay(dayOfTheWeek);
    setTime(time);
  });

  return currentConditions ? (
    <WeatherBasicsFrame>
      <WeatherBasicsName>{currentConditions.locationName}</WeatherBasicsName>
      {icon && <WeatherBasicsIcon>
        <img
          src={loadImage(
            `${icon < 10 ? `0${icon}` : icon}-s.png`,
          )}
          alt={currentConditions.WeatherText}
        />
        <p>{currentConditions.WeatherText}</p>
      </WeatherBasicsIcon>}
      <WeatherBasicsTemp>
        {currentConditions.Temperature.Metric.Value}
        <span>&#8451;</span>
      </WeatherBasicsTemp>
      {time && <WeatherBasicsTime>
        {day},{' '}
        <span>{time.split(':')[0] + ':' + time.split(':')[1]}</span>
      </WeatherBasicsTime>}
      <SeperatorLine></SeperatorLine>
    </WeatherBasicsFrame>
  ) : null;
}

const WeatherBasicsFrame = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const WeatherBasicsName = styled.div`
  text-align: center;
  font-size: 26px;
  margin-top: 30px;
  margin-bottom: -30px;
  letter-spacing: 1.8px;
`;
const WeatherBasicsIcon = styled.div`
  img {
    width: 200px;
    height: 130px;
    margin-left: 25px;
    margin-top: 50px;
    @media (max-width: 868px) {
      margin-left: -20px;
    }
  }
  p {
    font-size: 18px;
    letter-spacing: 1.5px;
    text-align: center;
  }
`;
const WeatherBasicsTemp = styled.div`
  font-size: 38px;
  letter-spacing: 1.5px;
  text-align: left;
  margin: 12px;
  span {
    position: relative;
    font-size: 28px;
    top: -10px;
    left: 5px;
  }
`;
const WeatherBasicsTime = styled.div`
  font-size: 18px;
  letter-spacing: 1.5px;
  text-align: left;
  margin: 12px;
  font-weight: bold;
  span {
    font-weight: normal;
    color: grey;
  }
`;
const SeperatorLine = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;
  border: 0.2px solid lightgrey;
`;
