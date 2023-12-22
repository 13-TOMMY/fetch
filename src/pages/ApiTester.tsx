import { FC, useState } from 'react'
import FetchForm from '../components/FetchForm';

const ApiTester: FC = () => {
  const [apiCheckMethod, setApiCheckMethod] = useState<'fetch' | 'axios' | 'query'>('fetch'););

  const handleButtonClick = (method: 'fetch' | 'axios' | 'query') => {
    setApiCheckMethod(method)
  }
  return (
    <div>
      <div className="btns-api-tester-container">
        <button onClick={() => handleButtonClick('fetch')}>Fetch</button>
        <button onClick={() => handleButtonClick('axios')}>Axios</button>
        <button onClick={() => handleButtonClick('query')}>Query</button>
      </div>
      <div className="api-check-method-container">
        <FetchForm selectedMethod={apiCheckMethod} /> 
      </div>
    </div>
  )
}

export default ApiTester