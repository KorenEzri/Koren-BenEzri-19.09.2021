import styled from 'styled-components/macro';

interface Props {
  data;
}

export function Clock(props: Props) {
  const { data } = props;

  return (
    <ClockFrame>
      <p>{new Date(data).toTimeString().split(' ')[0]}</p>
      <ClockContainer>
        <Top></Top>
        <Right></Right>
        <Bottom></Bottom>
        <Left></Left>
        <Center></Center>
        <Shadow></Shadow>
        <Hour></Hour>
        <Minute></Minute>
        <Second></Second>
      </ClockContainer>
    </ClockFrame>
  );
}

const Top = styled.div`
  position: absolute;
  width: 3px;
  height: 8px;
  background: #262626;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
const Right = styled.div`
  position: absolute;
  width: 8px;
  height: 3px;
  background: #262626;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto 0;
`;
const Bottom = styled.div`
  position: absolute;
  width: 3px;
  height: 8px;
  background: #262626;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
`;
const Left = styled.div`
  position: absolute;
  width: 8px;
  height: 3px;
  background: #262626;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
`;
const Center = styled.div`
  height: 6px;
  width: 6px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #262626;
  border-radius: 100%;
`;
const Shadow = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  left: 60px;
  top: 60px;
  transform: rotate(135deg);
  background: linear-gradient(transparent, rgba(#000, 0.1));
`;
const Hour = styled.div`
  width: 3px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  animation: time 60s infinite linear;
  &:before {
    position: absolute;
    content: '';
    background: #262626;
    height: 60px;
    width: 3px;
    top: 30px;
  }
`;
const Minute = styled.div`
  width: 1px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  animation: time 30s infinite linear;
  &:before {
    position: absolute;
    content: '';
    background: #262626;
    height: 40px;
    width: 1px;
    top: 50px;
  }
`;
const Second = styled.div`
  width: 2px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  animation: time 15s infinite linear;
  &:before {
    position: absolute;
    content: '';
    background: #fd1111;
    height: 45px;
    width: 2px;
    top: 45px;
  }
`;
const ClockContainer = styled.div`
  margin-top: -5px;
  position: relative;
  height: 120px;
  width: 120px;
  background: white;
  box-sizing: border-box;
  border-radius: 100%;
  border: 10px solid #158176;
  position: absolute;
  margin-left: 40px;
  @keyframes time {
    to {
      transform: rotate(360deg);
    }
  }
`;
const ClockFrame = styled.div`
  p {
    font-weight: bold;
    letter-spacing: 1.5px;
  }
  margin-top: -12px;
`;
