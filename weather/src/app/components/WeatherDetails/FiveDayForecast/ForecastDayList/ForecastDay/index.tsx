import styled from 'styled-components/macro';
import { IDayForecast } from 'types';
import { getDayOfWeek, loadImage } from 'utils';

interface Props {
  forecast: IDayForecast;
  index: number;
}

export function ForecastDay(props: Props) {
  const { forecast, index } = props;
  const iconAsNumber = forecast.Day.Icon;
  const dayOfTheWeek = getDayOfWeek(new Date(forecast.Date));

  return (
    <ForecastDayFrame key={`dailyForecast#${index}`}>
      <ForecastWeatherDay>{dayOfTheWeek}</ForecastWeatherDay>
      <ForecastWeatherImage>
        <img
          src={loadImage(
            `${iconAsNumber < 10 ? `0${iconAsNumber}` : iconAsNumber}-s.png`,
          )}
          alt={forecast.Day.IconPhrase}
        />
      </ForecastWeatherImage>
      <ForecastWeatherTemp>
        {forecast.Temperature.Minimum.Value} -
        {` ${forecast.Temperature.Maximum.Value}`}
        {forecast.Temperature.Maximum.Unit}
      </ForecastWeatherTemp>
    </ForecastDayFrame>
  );
}

const ForecastDayFrame = styled.li`
  margin-top: 10px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  width: 180px;
  height: 210px;
  text-align: center;
  -webkit-box-shadow: 3px 5px 15px -4px rgba(0, 0, 0, 0.57);
  box-shadow: 3px 5px 15px -4px rgba(0, 0, 0, 0.57);
`;
const ForecastWeatherDay = styled.div`
  margin-bottom: 20px;
`;
const ForecastWeatherImage = styled.div`
  margin-bottom: 20px;
  img {
    width: 100px;
    height: 60px;
  }
`;
const ForecastWeatherTemp = styled.div``;
