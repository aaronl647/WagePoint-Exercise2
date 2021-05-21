import React from "react";
import { Button } from "../Button/Button";
import "./Form.css";

function Form() {
  return (
    <div className="form-container">
      <form>
        <label>
          First Name
          <input type="text" />
        </label>
        <label>
          Last Name
          <input type="text" />
        </label>

        <label>
          Email
          <input type="text" />
        </label>

        <label>
          Phone Number <input type="text" />
        </label>

        <label>
          Country
          <select name="Country">
            <option value="">-Please Select-</option>
            <option value="Canada">Canada</option>
            <option value="United States">United States</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Accounting App
          <select name="Accounting App">
            <option value="">-Please Select-</option>
            <option value="Intuit QuickBooks">Intuit QuickBooks</option>
            <option value="Xero">Xero</option>
            <option value="FreshBooks">FreshBooks</option>
            <option value="Sage">Sage</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </form>
      <Button
        className="btn"
        buttonStyle="btn--large"
        buttonSize="btn--primary"
      >
        GET STARTED
      </Button>
    </div>
  );
}

export default Form;
