import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import "./App.css";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header loggedIn={false} />
      <div id="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
