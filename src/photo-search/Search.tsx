import React, { ChangeEvent, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

interface Props {
  onSearchButtonClick: (search: string) => void;
}

const Search = ({ onSearchButtonClick }: Props) => {
  const [input, setInput] = useState<string>('');
  return (
    <section className="search-section">
      <TextField
        id="search-field"
        label="Søk"
        fullWidth
        autoFocus
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setInput(event.target.value);
        }}
        onKeyDown={(event: React.KeyboardEvent<HTMLElement>) => {
          if (event.key === 'Enter') {
            onSearchButtonClick(input);
          }
        }}
        InputProps={{
          style: {
            height: 50,
            fontSize: '2em'
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="Search"
                onClick={() => {
                  onSearchButtonClick(input);
                }}
              >
                <Icon>search</Icon>
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </section>
  );
};

export default Search;
