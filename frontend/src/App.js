import Header from "./components/Header";
import Register from "./components/Register";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">{Header()}</header>
      <main>{Register()}</main>
    </div>
  );
}

export default App;
