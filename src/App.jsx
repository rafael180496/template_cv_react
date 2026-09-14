import HomePage from "./page/HomePage";
import LangProvider from "./provider/LangProvider";

const App = () => (
  <LangProvider>
    <HomePage />
  </LangProvider>
);

export default App;
