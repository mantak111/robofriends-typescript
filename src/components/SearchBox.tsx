import React from "react";

interface ISearchBoxProps {
  searchChange(event: React.ChangeEvent<HTMLInputElement>): void
}


const SearchBox:React.SFC<ISearchBoxProps> = ({ searchChange}): JSX.Element => {
  return (
    <div className="pa2">
      <input
        onChange={searchChange}
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
      />
    </div>
  );
};


export default SearchBox;
