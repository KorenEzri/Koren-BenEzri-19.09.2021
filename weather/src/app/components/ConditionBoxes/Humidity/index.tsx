import styled from 'styled-components/macro';
import humidity from './humid.png';
interface Props {
  data;
}

export function Humidity(props: Props) {
  const { data } = props;
  return (
    <HumidityFrame>
      <img src={humidity} alt="humidity" />
      <span>{data}</span>
    </HumidityFrame>
  );
}

const HumidityFrame = styled.div`
img {
  width: 150px;
  height: 150px;
  margin-left: 20px;
  margin-top: 10px;
}
span {
  position: relative;
  right: 90px;
  font-size: 26px;
  font-weight: bold;

}
`;
