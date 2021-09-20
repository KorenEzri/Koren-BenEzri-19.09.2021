import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { SearchBar, WeatherDetails } from 'app/components';

export function WeatherPage() {
  return (
    <WeatherPageWrapper>
      <Helmet>
        <title>Weather</title>
        <meta name="Weather" content="An H Home Assignment Weather-App" />
      </Helmet>
      <MainContentFrame>
        <SearchBar />
        <WeatherDetails />
      </MainContentFrame>
    </WeatherPageWrapper>
  );
}

const WeatherPageWrapper = styled.div``;
const MainContentFrame = styled.div``;
