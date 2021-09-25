import styled from 'styled-components/macro';
import { IFullConditions } from 'types';
import { getDayOfWeek, loadImage } from 'utils';

interface Props {
  currentConditions: IFullConditions;
}

export function WeatherBasics(props: Props) {
  const { currentConditions } = props;
  const iconAsNumber = currentConditions.WeatherIcon;
  const dayOfTheWeek = getDayOfWeek(new Date(currentConditions.LocalObservationDateTime));
  const time = new Date(currentConditions.LocalObservationDateTime).toTimeString().split(" ")[0]

  return (
    <WeatherBasicsFrame>
      <WeatherBasicsIcon>
        <img
          src={loadImage(
            `${iconAsNumber < 10 ? `0${iconAsNumber}` : iconAsNumber}-s.png`,
          )}
          alt={currentConditions.WeatherText}
        />
      </WeatherBasicsIcon>
      <WeatherBasicsTemp>
        {currentConditions.Temperature.Metric.Value}<span>&#8451;</span>
      </WeatherBasicsTemp>
      <WeatherBasicsTime>
        {dayOfTheWeek}, <span>{time.split(":")[0] + ":" + time.split(":")[1]}</span>
      </WeatherBasicsTime>
      <SeperatorLine></SeperatorLine>

    </WeatherBasicsFrame>
  );
}

const WeatherBasicsFrame = styled.div`
`;
const WeatherBasicsIcon = styled.div`
  img {
    width: 200px;
    height: 130px;
    margin-left: 20px;
    margin-top: 50px;
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
`
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
`
const SeperatorLine = styled.div`
width: 90%;
margin: auto;
margin-top: 50px;
border: 0.2px solid lightgrey;
`