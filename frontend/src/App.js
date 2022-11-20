import Header from "./components/Header";
// import Footer from "./components/Footer";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <header className="App-header">{Header}</header>
      <main>{Register()}</main>
    </div>
  );
}

export default App;
