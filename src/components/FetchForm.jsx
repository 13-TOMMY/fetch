import React, { useState } from "react";
import Fetch from "./fetch";
import Axios from "./Axios";
import Query from "./Query";

function FetchForm({ selectedMethod }) {
  // const = useState();
  const [httpMethod, setHttpMethod] = useState("GET");
  const [endpoint, setEndpoint] = useState("");

  const handleHttpMethod = (e) => {
    setHttpMethod(e.target.value);
  };

  const handleEndpoint = (e) => {
    setEndpoint(e.target.value);
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
      </div>
      <div className="fetch-method-container">
        {selectedMethod === "fetch" && (
          <Fetch endpoint={endpoint} httpMethod={httpMethod} />
        )}
        {selectedMethod === "axios" && (
          <Axios endpoint={endpoint} httpMethod={httpMethod} />
        )}
        {selectedMethod === "query" && (
          <Query endpoint={endpoint} httpMethod={httpMethod} />
        )}
      </div>
    </div>
  );
}

export default FetchForm;
