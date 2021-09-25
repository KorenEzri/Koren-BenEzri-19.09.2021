import styled from 'styled-components/macro';
import { IAutoCompleteResult } from 'types';
import { SearchResult } from './SearchResult/Loadable';

interface Props {
  searchSuggestions: IAutoCompleteResult[];
  setLocationKey;
}

export function SearchResultList(props: Props) {
  const { searchSuggestions, setLocationKey } = props;

  return (
    <SearchResultListFrame>
      {searchSuggestions?.map((suggestion, index) => {
        return (
          <SearchResult
            suggestion={suggestion}
            key={`SearchSuggestion#${index}`}
            setLocationKey={setLocationKey}
          />
        );
      })}
    </SearchResultListFrame>
  );
}

const SearchResultListFrame = styled.ul`
  list-style-type: none;
  position: absolute;
  width: 20%;
  margin-top: 45px;
  display: flex;
  margin-left: -30px;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 55px;
  }
`;
