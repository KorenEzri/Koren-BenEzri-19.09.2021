import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  data: number;
}
interface FillGauge {
  fill: number;
}

export function Gauge(props: Props) {
  const { data } = props;
  return (
    <GaugeFrame>
      <GaugeBody>
        <GaugeFill fill={data / 2}></GaugeFill>
        <GaugeCover>{data}</GaugeCover>
      </GaugeBody>
    </GaugeFrame>
  );
}

const GaugeFrame = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  width: 160px;
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  color: #004033;
`;
const GaugeBody = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  background: #b4c0be;
  position: relative;
  border-top-left-radius: 100% 200%;
  border-top-right-radius: 100% 200%;
  overflow: hidden;
`;
const GaugeFill = styled.div<FillGauge>`
  position: absolute;
  top: 100%;
  left: 0;
  width: inherit;
  height: 100%;
  background: #009578;
  transform-origin: center top;
  transform: ${({ fill }) => `rotate(0.${fill}turn)`};
  transition: transform 0.2s ease-out;
`;
const GaugeCover = styled.div`
  width: 75%;
  height: 150%;
  background: #ffffff;
  border-radius: 50%;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 25%;
  box-sizing: border-box;
`;
