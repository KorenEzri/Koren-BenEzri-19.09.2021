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
    <GaugeFrame fill={data / 2}>
      <div className="gauge">
        <div className="gauge__body">
          <div className="gauge__fill"></div>
          <div className="gauge__cover">{data}</div>
        </div>
      </div>
    </GaugeFrame>
  );
}

const GaugeFrame = styled.div<FillGauge>`
  margin-top: 20px;
  .gauge {
    width: 200px;
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    color: #004033;
  }

  .gauge__body {
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    background: #b4c0be;
    position: relative;
    border-top-left-radius: 100% 200%;
    border-top-right-radius: 100% 200%;
    overflow: hidden;
  }

  .gauge__fill {
    position: absolute;
    top: 100%;
    left: 0;
    width: inherit;
    height: 100%;
    background: #009578;
    transform-origin: center top;
    transform: ${({fill}) => `rotate(0.${fill}turn)`};
    transition: transform 0.2s ease-out;
  }

  .gauge__cover {
    width: 75%;
    height: 150%;
    background: #ffffff;
    border-radius: 50%;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);

    /* Text */
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 25%;
    box-sizing: border-box;
  }
`;
