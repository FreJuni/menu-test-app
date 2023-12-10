import "./App.css";
import Meals from "./component/Meals";
import Search from "./component/Search";
import Model from "./component/Model";
import Favourite from "./component/Favourite";
import { GlobalContent } from "./context";

function App() {
  const { model } = GlobalContent();
  return (
    <div className="section-center">
      <Search />
      <Favourite />
      <Meals />
      {model && <Model />}
    </div>
  );
}

export default App;
