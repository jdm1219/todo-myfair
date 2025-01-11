import React from "react";
import styled from "@emotion/styled";

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FilterRadioLabel = styled.label<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 108px;
  height: 40px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  color: ${props => props.isSelected ? '#2182f3' : '#454545'};
  background-color: ${props => props.isSelected ? '#ebf4ff' : 'transparent'};
  transition: background-color 0.2s ease;

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
`;


const TodoFilter = () => {
  const filter = 'All'
  const filterOptions = ['All', 'To Do', 'Done'];


  return (
    <FilterContainer>
      {filterOptions.map((filterOption) => (
        <FilterRadioLabel
          key={filterOption}
          isSelected={filter === filterOption}
        >
          <input
            type="radio"
            name="todoFilter"
            value={filterOption}
            checked={filter === filterOption}
          />
          {filterOption}
        </FilterRadioLabel>
      ))}
    </FilterContainer>
  );
};

export default TodoFilter;