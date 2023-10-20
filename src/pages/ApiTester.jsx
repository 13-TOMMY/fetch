import React, { useState } from 'react'
import Fetch from '../components/fetch';
import Axios from '../components/Axios';
import Query from '../components/Query';

function ApiTester() {
  const [apiCheckMethod, setApiCheckMethod] = useState('fetch');

  const handleButtonClick = (methord) => {
    setApiCheckMethod(methord)
  }
  return (
    <div>
      <div className="btns-api-tester-container">
        <button onClick={() => handleButtonClick('fetch')}>Fetch</button>
        <button onClick={() => handleButtonClick('axios')}>Axios</button>
        <button onClick={() => handleButtonClick('query')}>Query</button>
      </div>
      <div className="api-check-method-container">
        {apiCheckMethod === 'fetch' && <Fetch />}
        {apiCheckMethod === 'axios' && <Axios />}
        {apiCheckMethod === 'query' && <Query />}
      </div>
    </div>
  )
}

export default ApiTester