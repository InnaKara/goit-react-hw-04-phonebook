import { FilterDiv, FilterInput } from './Filter.styled';

export const Filter = ({ filter, searchName }) => {
  return (
    <FilterDiv>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={event => searchName(event.target.value)}
      />
    </FilterDiv>
  );
};
