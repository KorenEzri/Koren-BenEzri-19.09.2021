import styled from 'styled-components/macro';

interface Props {data}

export function Visibility(props: Props) {
  const { data } = props;
  return (
    <VisibilityFrame>
      <VisibilityBox>
        <VisibilityWave className="one"></VisibilityWave>
        <VisibilityWave className="two"></VisibilityWave>
        <VisibilityWave className="three"></VisibilityWave>
      </VisibilityBox>
       <p> {data}</p>
    </VisibilityFrame>
  );
}


const VisibilityFrame = styled.div`
  text-align: center;
  height: 175px;
  margin-left: -16px;
  overflow: hidden;
  border-radius: 20px;
  p {
    font-weight: bold;
    letter-spacing: 1.5px;
  }
`;
const VisibilityBox = styled.div`
  top: 0;
  transform: rotate(80deg);
  left: 0;
  &:after {
    content: '';
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
    transform: translate3d(0, 0, 0);
  }
`;
const VisibilityWave = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.4;
  position: absolute;
  background: #0af;
  width: 1200px;
  height: 1300px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: drift 7000ms infinite linear;
  margin-top: -120px;
  .two {
    animation: drift 3000ms infinite linear;
    opacity: 0.1;
    background: black;
    position: fixed;
  }
  .three {
    animation: drift 7500ms infinite linear;
    position: fixed;
    background-color: red;
  }
  @keyframes drift {
    from {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
`;
