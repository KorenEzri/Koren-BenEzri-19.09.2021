import styled from 'styled-components/macro';
import { Navbar } from './Navbar/Loadable';

interface Props {}

export function Header(props: Props) {
  return (
    <HeaderFrame>
      <HeaderLeftFrame>
      </HeaderLeftFrame>
      <HeaderRightFrame>
        <Navbar />
      </HeaderRightFrame>
    </HeaderFrame>
  );
}

const HeaderFrame = styled.div`

@media (max-width: 768px) {
  display:none;
}      
`;
const HeaderLeftFrame = styled.div`
  width: 20%;
  float: left;
  padding: 10px;
`;
const HeaderRightFrame = styled.div`
  background-color: #f7f6f9;
  width: 80%;
  float: right;
  padding: 10px;
`;
