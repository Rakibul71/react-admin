import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";

function App() {
  return (
    <div>
      <Topbar></Topbar>
      <div className="container">
        <Sidebar></Sidebar>
        <div className="others">Others</div>
      </div>
    </div>
  );
}

export default App;
