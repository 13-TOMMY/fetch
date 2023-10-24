import React, { useState } from "react";
import Fetch from "./fetch";
import Axios from "./Axios";
import Query from "./Query";

function FetchForm({ selectedMethod }) {
  // form input
  const [httpMethod, setHttpMethod] = useState("GET");
  const [endpoint, setEndpoint] = useState("");
  const [authenticationType, SetAuthenticationType] = useState("");
  const [authenticationCredentials, SetAuthenticationCredentials] = useState("");
  const [requestBody, setRequestBody] = useState("");

  const handleHttpMethod = (e) => {
    setHttpMethod(e.target.value);
  };

  const handleEndpoint = (e) => {
    setEndpoint(e.target.value);
  };

  const handleAuthenticationType = (e) => {
    SetAuthenticationType(e.target.value);
  };

  const handleAuthenticationCredentials = (e) => {
    SetAuthenticationCredentials(e.target.value);
  };

  const handleRequestBody = (e) => {
    setRequestBody(e.target.value);
  };

  //clear form, no auto clear so that you see the data you passed
  const handleClear = () => {
    setHttpMethod("GET");
    setEndpoint("");
    SetAuthenticationType("");
    SetAuthenticationCredentials("");
    setRequestBody("");
  }

  return (
    <div className="fetch-form-container">
      <div className="fetch-form">
        <div className="http-method-container">
          <select
            name=""
            id="http-method"
            className="http-methods"
            defaultValue="GET"
            value={httpMethod}
            onChange={handleHttpMethod}
          >
            <option value="GET">GET</option>
            <option value="PUT">PUT</option>
            <option value="POST">POST</option>
            <option value="DELETE">DELETE</option>
          </select>
        </div>
        <div className="endpoint-container">
          <label htmlFor="endpoint">Endpoint URL:</label>
          <input
            type="text"
            id="endpoint"
            name="endpoint"
            value={endpoint}
            onChange={handleEndpoint}
            placeholder="Enter the API endpoint URL"
          />
        </div>
        <div className="authentication-container">
          <label htmlFor="authentication-type"> authentication Type:</label>
          <select name="" id="authentication-type" defaultValue="" value={authenticationType} onChange={handleAuthenticationType}>
            <option value="">None</option>
            <option value="basic">Basic</option>
            <option value="oauth">OAuth</option>
            <option value="bearer">Bearer Token</option>
          </select>
          <label htmlFor="authentication-credentials">
          Authentication Credentials:
          </label>
          <input type="text" id="authentication-credentials" name="authentication-credentials" value={authenticationCredentials} onChange={handleAuthenticationCredentials} placeholder="Enter the authentication credentials!" />
        </div>
        <div className="request-body-container">
          <label htmlFor="request-body">Request Body:</label>
          <textarea name="request-body" id="request-body" value={requestBody} onChange={handleRequestBody} placeholder="Enter the request body" cols="30" rows="10"/>
        </div>
        <div className="clear-btn-container"><button type="clear" onClick={handleClear}>Clear</button></div>
      </div>
      <div className="fetch-method-container">
        {selectedMethod === "fetch" && (
          <Fetch endpoint={endpoint} httpMethod={httpMethod} authenticationType={authenticationType} authenticationCredentials={authenticationCredentials} requestBody={requestBody}/>
        )}
        {selectedMethod === "axios" && (
          <Axios endpoint={endpoint} httpMethod={httpMethod} authenticationType={authenticationType} authenticationCredentials={authenticationCredentials} requestBody={requestBody}/>
        )}
        {selectedMethod === "query" && (
          <Query endpoint={endpoint} httpMethod={httpMethod} authenticationType={authenticationType} authenticationCredentials={authenticationCredentials} requestBody={requestBody}/>
        )}
      </div>
    </div>
  );
}

export default FetchForm;
