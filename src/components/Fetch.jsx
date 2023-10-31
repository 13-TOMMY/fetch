import React, { useEffect, useState } from "react";

function Fetch({ apiData }) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (apiData) {
      setLoading(true);
      setError(null);
    }
    const url = apiData.endpoint;

    const options = {
      method: apiData.httpMethod,
      headers: {
        Authorization: `Basic ${btoa(apiData.authenticationCredentials)}`,
      },
      body: apiData.requestBody,
    };

    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setResponse(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
    })
  }, [apiData]);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {response && response !== null && {}}
    </div>
  );
}

export default Fetch;
