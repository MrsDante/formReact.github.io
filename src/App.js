//import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const [password, setPassword] = useState('');
  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const [address, setAddress] = useState('');
  const handleAddress = ({ target }) => {
    setAddress(target.value);
  };

  const [city, setCity] = useState('');
  const handleCity = ({ target }) => {
    setCity(target.value);
  };

  const [country, setCountry] = useState('');
  const handleCountry = ({ target }) => {
    setCountry(target.value);
  };

  const [rules, setRules] = useState(false);
  const handleRules = ({ target }) => {
    setRules(target.checked);
  };

  const [submittingState, setSubmittingState] = useState('edit');

  const sendForm = (e) => {
    e.preventDefault();
    setSubmittingState('send');
  };

  const backForm = () => {
    setSubmittingState('edit');
  };

  const renderForm = () => (
    <form onSubmit={sendForm} name="myForm">
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="email" className="col-form-label">
            Email
          </label>
          <input
            onChange={handleEmail}
            value={email}
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="password" className="col-form-label">
            Password
          </label>
          <input
            onChange={handlePassword}
            value={password}
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="address" className="col-form-label">
          Address
        </label>
        <textarea
          onChange={handleAddress}
          value={address}
          type="text"
          className="form-control"
          name="address"
          id="address"
          placeholder="1234 Main St"
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="city" className="col-form-label">
            City
          </label>
          <input
            onChange={handleCity}
            value={city}
            type="text"
            className="form-control"
            name="city"
            id="city"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="country" className="col-form-label">
            Country
          </label>
          <select
            onChange={handleCountry}
            value={country}
            id="country"
            name="country"
            className="form-control"
          >
            <option>Choose</option>
            <option value="argentina">Argentina</option>
            <option value="russia">Russia</option>
            <option value="china">China</option>
            <option value="france">France</option>
            <option value="usa">USA</option>
            <option value="korea">Korea</option>
            <option value="japan">Japan</option>
            <option value="mexico">Mexico</option>
            <option value="australia">Australia</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <label className="form-check-label" htmlFor="rules">
            <input
              onChange={handleRules}
              checked={rules}
              id="rules"
              type="checkbox"
              name="acceptRules"
              className="form-check-input"
            />
            Accept Rules
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
  );

  const createRow = ([name, value]) => (
    <tr key={name}>
      <td>{name}</td>
      <td>{value.toString()}</td>
    </tr>
  );

  const renderTable = () => {
    const form = {
      email,
      password,
      address,
      city,
      country,
      rules,
    };
    const fields = Object.entries(form).sort();

    return (
      <div>
        <button onClick={backForm} type="button" className="btn btn-primary">
          Back
        </button>
        <table className="table">
          <tbody>{fields.map(createRow)}</tbody>
        </table>
      </div>
    );
  };

  switch (submittingState) {
    case 'edit':
      return renderForm();
    case 'send':
      return renderTable();
    default:
      throw new Error(`${submittingState} is unknown state`);
  }
}


export default App;
