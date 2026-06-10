import { SearchIcon } from "../../assets/svg-images/SearchIcon";
import "./SearchInput.scss";

type SearchInputProps = {
  placeholder: string;
};

export const SearchInput = ({ placeholder }: SearchInputProps) => {
  return (
    <label className="search">
      <SearchIcon className="search-icon" />
      <input type="text" placeholder={placeholder} className="search-field" />
    </label>
  );
};
