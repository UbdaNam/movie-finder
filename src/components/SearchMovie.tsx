import { DebounceInput } from 'react-debounce-input';

interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchMovie = ({ onSearch }: Props) => {
  return (
    <DebounceInput
      debounceTimeout={300}
      className='form-control'
      type='text'
      placeholder='Search...'
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchMovie;
