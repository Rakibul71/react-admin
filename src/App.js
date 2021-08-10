import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Topbar></Topbar>
      <div className="container">
        <Sidebar></Sidebar>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
