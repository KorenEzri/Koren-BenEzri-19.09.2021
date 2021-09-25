import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { IAutoCompleteResult } from 'types';

interface Props {
  suggestion: IAutoCompleteResult;
  setLocationKey;
}

export function SearchResult(props: Props) {
  const { suggestion, setLocationKey } = props;
  return suggestion ? (
    <SuggestionWrapper
      onClick={() => {
        setLocationKey(suggestion.Key);
      }}
    >
      <NavLink exact={true} className="link" to={`${suggestion.Key}`}>
        <SuggestionFrame>{suggestion.LocalizedName}</SuggestionFrame>
      </NavLink>
    </SuggestionWrapper>
  ) : null;
}

const SuggestionWrapper = styled.div`
  .link {
    color: black;
    text-decoration: none;
  }
`;
const SuggestionFrame = styled.li`
  padding: 10px;
  width: 100%;
  margin: 2px;
  letter-spacing: 1.5px;
  border: 1px solid darkgreen;
  cursor: pointer;
  background-color: #0064009b;
  text-shadow: 0.2px 0.2px 0.2px white;
  font-weight: bold;
  @media (max-width: 768px) {
    width: 300px;
    margin-top: 0;
  }
  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  @-webkit-keyframes slideInUp {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes slideInUp {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
`;
