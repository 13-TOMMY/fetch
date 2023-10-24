import React from "react";

function Axios() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="submit-btn-container">
        <button type="submit" onClick={handleSubmit}>
          Make Request
        </button>
      </div>
    </div>
  );
}

export default Axios;
