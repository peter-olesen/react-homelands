import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";
import { Search } from "./Search/Search";

export const Header = () => {
  return (
    <header className="Header">
      <div className="HeaderContainer">
        <Logo />
        <div className="NavSearch">
          <Navigation />
          <Search />
        </div>
      </div>
    </header>
  );
};
