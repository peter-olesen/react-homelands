import { UserContextProvider } from "./context/UserContext";
import { Router } from "./router/Router";
import { useScrollToTop } from "./hooks/useScrollToTop";
import "./App.scss";

function App() {
  useScrollToTop();
  return (
    <>
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </>
  );
}

export default App;
