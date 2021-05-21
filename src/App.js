import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import Form from "./components/Form/Form";

{
  /* All components are called on the main App.js file,  */
}

{
  /*This method of programming keep the code very clean.*/
}
{
  /* Also helps with website optimization because indiviual components can refresh when the specific components  */
}
function App() {
  return (
    <div className="App">
      <NavBar />
      {/* The usage of props in React helps with editing the webpage with ease. */}
      <LandingPage
        title="Solve payroll for your small business clients."
        paragraph="Wagepoint also helps you generate consistent revenue for your accounting or bookkeeping firm with simple payroll software that's easy to use and recommend."
      />
      <Form />
    </div>
  );
}

export default App;
