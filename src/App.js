import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
function App() {
  return (
    <div>
      <h1>bruh</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">invoices</Link> |{" "}
        <Link to="/expenses">expenses</Link>
      </nav>
    </div>
  );
}

export default App;
