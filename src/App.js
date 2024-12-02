import Body from "./components/Body";
import Head from "./components/Head";
import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/store";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
