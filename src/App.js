import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage
        title="Solve payroll for your small business clients."
        paragraph="Wagepoint also helps you generate consistent revenue for your accounting or bookkeeping firm with simple payroll software that's easy to use and recommend."
      />
    </div>
  );
}

export default App;
