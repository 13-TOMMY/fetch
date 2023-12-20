import React from "react";

function Query() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      query
      <div className="submit-btn-container">
        <button type="submit" onClick={handleSubmit}>
          Make Request
        </button>
      </div>
    </div>
  );
}

export default Query;
