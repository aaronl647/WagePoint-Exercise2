import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage
        title="Solve payroll for your small business clients."
        paragraph="Wagepoint also helps you generate consistent revenue for your accounting or bookkeeping firm with simple payroll software that's easy to use and recommend."
      />
      <Form />
    </div>
  );
}

export default App;
