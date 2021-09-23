import styled from 'styled-components/macro';
import speed from './wind-speed.png';

interface Props {
  data;
}

export function WindSpeed(props: Props) {
  const { data } = props;
  return (
    <WindSpeedFrame>
      <img src={speed} alt="wind speed" />
      <p>{data}</p>
    </WindSpeedFrame>
  );
}

const WindSpeedFrame = styled.div`
display: flex;
flex-direction: column;
img {
  width: 140px;
  height: 140px;
  margin: auto;
}
p {
  margin-top: -6px;
  margin-left: 3px;
  font-weight: bold;
  letter-spacing: 1.5px;
}
`;