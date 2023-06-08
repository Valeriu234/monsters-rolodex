import { ChangeEventHandler, Component } from "react";

import "./search-box.styles.css";

interface SearchInputProps {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  className: string;
}
class SearchBoxComponent extends Component<SearchInputProps, object> {
  constructor(props: SearchInputProps) {
    super(props);
  }

  render() {
    const { onChangeHandler, placeholder, className } = this.props;
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
  }
}

export default SearchBoxComponent;
