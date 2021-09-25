import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { WeatherDetails } from 'app/components';

export function WeatherPage(props) {
  return (
    <WeatherPageWrapper>
      <Helmet>
        <title>Weather</title>
        <meta name="Weather" content="An H Home Assignment Weather-App" />
      </Helmet>
      <WeatherDetails />
    </WeatherPageWrapper>
  );
}

const WeatherPageWrapper = styled.div`
`;
