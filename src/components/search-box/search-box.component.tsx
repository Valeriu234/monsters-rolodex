import { ChangeEventHandler } from "react";

import "./search-box.styles.css";

interface SearchInputProps {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  className: string;
}

const SearchBoxComponent = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchInputProps) => {
  return (
    <>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </>
  );
};

export default SearchBoxComponent;
