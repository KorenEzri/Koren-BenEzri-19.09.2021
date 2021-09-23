import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { WeatherDetails } from 'app/components';

export function WeatherPage(props) {
  const key = window.location.hash.slice(2)
  return (
    <WeatherPageWrapper>
      <Helmet>
        <title>Weather</title>
        <meta name="Weather" content="An H Home Assignment Weather-App" />
      </Helmet>
      <LeftSidebarFrame>
      </LeftSidebarFrame>
      <MainContentFrame>
        <WeatherDetails locationKey={key} />
      </MainContentFrame>
    </WeatherPageWrapper>
  );
}

const WeatherPageWrapper = styled.div`
  height: 100%;
`;
const MainContentFrame = styled.div`
  background-color: #f7f6f9;
  padding: 10px;
  width: 80%;
  float: right;
  `;
  const LeftSidebarFrame = styled.div`
  background-color: #fffffd;
  width: 20%;
  float: left;
`;
