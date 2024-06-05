import { BrowserRouter } from "react-router-dom";

import "./App.css";
import AppRouter from "./AppRouter";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;