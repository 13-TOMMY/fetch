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

  }, [apiData]);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {response && {}}
    </div>
  );
}

export default Fetch;
