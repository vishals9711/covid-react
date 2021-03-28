import React, { SyntheticEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import logo from './search.svg';
import './SearchBar.scss';

interface IProps {
  searchButtonClick: (search: string) => void;
}

const SearchBar = ({ searchButtonClick }: IProps): React.ReactElement => {
  const [inputValue, setInputValue] = useState('');

  const onClick = (e: SyntheticEvent) => {
    e.preventDefault();
    searchButtonClick(inputValue);
  };
  return (
    <div className="searchBar">
      <form onSubmit={onClick}>
        <input
          className="form-control"
          placeholder="Search"
          value={inputValue}
          onChange={(event: React.FormEvent<HTMLInputElement>) =>
            setInputValue(event.currentTarget.value)
          }
        />
        <Button variant="outline-info" type={'submit'} onClick={onClick}>
          <img src={logo} alt={'Search'} />
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
