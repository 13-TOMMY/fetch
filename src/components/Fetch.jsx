import React from "react";

function Fetch() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      Fetch
      <div className="submit-btn-container">
        <button type="submit" onClick={handleSubmit}>
          Make Request
        </button>
      </div>
    </div>
  );
}

export default Fetch;
