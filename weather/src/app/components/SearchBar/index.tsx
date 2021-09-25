import React from 'react';
import styled from 'styled-components/macro';
import { IAutoCompleteResult, ISpinnerError } from 'types';
import {
  handleTextChange,
  getAutoCompleteSuggestions,
  debounce,
  mock,
} from 'utils';
import { Spinner } from '../Spinner/Loadable';
import { SearchResultList } from './SearchResultList/Loadable';

interface Props {
  setSearchText;
  setLocationKey;
  searchText: string;
}

export function SearchBar(props: Props) {
  const { searchText, setSearchText, setLocationKey } = props;
  const [showSpinner, setShowSpinner] = React.useState(false);
  const [spinnerError, setSpinnerError] = React.useState<ISpinnerError>();
  const [searchSuggestions, setSearchSuggestions] = React.useState<
    IAutoCompleteResult[]
  >([]);

  React.useEffect(() => {
    (async () => {
      try {
        setShowSpinner(true);
        debounce(async () => {
          // await getAutoCompleteSuggestions(searchText, setSearchSuggestions);
          // setSearchSuggestions(mock.autoComplete);
          setShowSpinner(false);
        }, 300);
      } catch ({ message }) {
        console.log(message);
        if (typeof message === 'string') {
          const error = {
            isErr: true,
            message: message,
          };
          setSpinnerError(error);
        }
        setShowSpinner(false);
      }
    })();
  }, [searchText]);

  return (
    <SearchBarFrame>
      <SearchBarInputFrame className="search-box">
        <input
          type="text"
          className="search-text"
          name="searchText"
          placeholder="Search by city..."
          autoComplete="off"
          value={searchText}
          onChange={e => {
            handleTextChange(e, setSearchText);
          }}
          onBlur={e => {
            setTimeout(() => {
              setSearchText('');
              setSearchSuggestions([]);
            }, 600);
          }}
        />
      </SearchBarInputFrame>
      <Spinner
        showSpinner={showSpinner}
        error={spinnerError}
        VisualComponent={false}
        submitLoader={true}
      >
        {searchSuggestions.length > 0 && (
          <SearchResultList
            setLocationKey={setLocationKey}
            searchSuggestions={searchSuggestions}
          />
        )}
      </Spinner>
    </SearchBarFrame>
  );
}

const SearchBarFrame = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -15px;
  @media (max-width: 768px) {
    margin-top: unset;
  }
`;
const SearchBarInputFrame = styled.div`
  input {
    border: 1px solid grey;
    color: black;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 12px;
    margin-left: 5px;
    outline: none;
    transition: 500ms;
    border-radius: 6px;
    cursor: pointer;
    background-color: white;
    &:hover {
      transition: 500ms;
      border: 1px solid darkgreen;
      border-radius: 9px;
    }
    &:focus {
      cursor: default;
      border: 2px solid darkgreen;
      color: white;
      border-radius: 9px;
      background-color: darkgreen;
    }
    @media (max-width: 768px) {
      margin-top: 10px;
      margin-bottom: 10px;
      &:focus {
        width: unset;
      }
      &:hover {
        width: unset;
      }
    }
  }
`;
