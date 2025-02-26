import { useState } from "react";
import { NavLink } from "react-router";
import { IoIosSearch } from "react-icons/io";
import s from "./Search.module.scss";

export const Search = () => {
  const [keyword, setKeyword] = useState();

  return (
    <div className={s.Search}>
      <input
        onChange={(e) => setKeyword(e.target.value)}
        id="searchBar"
        type="text"
        placeholder="Indtast søgeord"
      />
      <NavLink to={`/search/${keyword}`}>
        <button>
          <IoIosSearch />
        </button>
      </NavLink>
    </div>
  );
};
