import { IoIosSearch } from "react-icons/io";
import s from "./Search.module.scss";

export const Search = () => {
  return (
    <div className={s.Search}>
      <input id="searchBar" type="text" placeholder="Indtast søgeord" />
      <button>
        <IoIosSearch />
      </button>
    </div>
  );
};
