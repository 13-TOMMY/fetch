import React, { useState } from "react";
import Fetch from "./fetch";
import Axios from "./Axios";
import Query from "./Query";

function FetchForm({ selectedMethod }) {
  // form input
  const [httpMethod, setHttpMethod] = useState("GET");
  const [endpoint, setEndpoint] = useState("");
  const [authenticationType, SetAuthenticationType] = useState("");
  const [authenticationCredentials, SetAuthenticationCredentials] =
    useState("");
  const [requestBody, setRequestBody] = useState("");
  //btn data
  const [apiData, setApiData] = useState(null);

  //clear form, no auto clear so that you see the data you passed
  const handleClear = () => {
    setHttpMethod("GET");
    setEndpoint("");
    SetAuthenticationType("");
    SetAuthenticationCredentials("");
    setRequestBody("");
  };

  const handleApiCall = () => {
    const data = {
      httpMethod,
      endpoint,
      authenticationType,
      authenticationCredentials,
      requestBody,
    };
    setApiData(data);
  };

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
            onChange={(e) => setHttpMethod(e.target.value)}
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
            onChange={(e) => setEndpoint(e.target.value)}
            placeholder="Enter the API endpoint URL"
          />
        </div>
        <div className="authentication-container">
          <label htmlFor="authentication-type"> authentication Type:</label>
          <select
            name=""
            id="authentication-type"
            defaultValue=""
            value={authenticationType}
            onChange={(e) => SetAuthenticationType(e.target.value)}
          >
            <option value="">None</option>
            <option value="basic">Basic</option>
            <option value="oauth">OAuth</option>
            <option value="bearer">Bearer Token</option>
          </select>
          <label htmlFor="authentication-credentials">
            Authentication Credentials:
          </label>
          <input
            type="text"
            id="authentication-credentials"
            name="authentication-credentials"
            value={authenticationCredentials}
            onChange={(e) => SetAuthenticationCredentials(e.target.value)}
            placeholder="Enter the authentication credentials!"
          />
        </div>
        <div className="request-body-container">
          <label htmlFor="request-body">Request Body:</label>
          <textarea
            name="request-body"
            id="request-body"
            value={requestBody}
            onChange={(e) => setRequestBody(e.target.value)}
            placeholder="Enter the request body"
            cols="30"
            rows="10"
          />
        </div>
        <div className="clear-btn-container">
          <button type="clear" onClick={handleClear}>
          <button onClick={handleApiCall}>Fetch</button>
            Clear
          </button>
        </div>
      </div>
      <div className="fetch-method-container">
        {selectedMethod === "fetch" && (
          <Fetch
            apiData={apiData}
          />
        )}
        {selectedMethod === "axios" && (
          <Axios
          apiData={apiData}
          />
        )}
        {selectedMethod === "query" && (
          <Query
          apiData={apiData}
          />
        )}
      </div>
    </div>
  );
}

export default FetchForm;
