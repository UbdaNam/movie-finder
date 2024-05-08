interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchMovie = ({ onSearch }: Props) => {
  return (
    <input
      className='form-control'
      type='text'
      placeholder='Search...'
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchMovie;
