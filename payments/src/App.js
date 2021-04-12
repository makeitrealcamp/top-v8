import { useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import './App.css';

function queryString(query) {
  const res = {}
  query
    .replace('?', '')
    .split('&')
    .forEach(q => {
      const [key, value] = q.split('=')
      res[key] = value
    })
  return res
}

function App() {
  const location = useLocation()

  useEffect(() => {
    const { ref_payco } = queryString(location.search)

    axios({
      method: 'GET',
      baseURL: 'https://secure.epayco.co',
      url: `/validation/v1/reference/${ref_payco}`,
    })
      .then(({ data }) => console.log(data))
  }, [location])

  const handler = window.ePayco.checkout.configure({
    key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
    test: true,
  })

  const data = {
    external: 'false',
    autoclick: 'false',

    tax: '0',
    tax_base: '0',
    amount: '20000',
    name: 'Programa TOP Make it Real',
    description: 'Programa fullstack inmersivo',
    currency: 'cop',

    country: 'CO',
    lang: 'en',

    invoice: '1234123',
    extra1: 'extra1',
    extra2: 'extra2',
    extra3: 'extra3',

    response: `${process.env.REACT_APP_BASE_URL}/response`,

    name_billing: 'Maria Lopez',
    address_billing: 'Calle 54 # 189 - 12',
    type_doc_billing: 'CC',
    number_doc_billing: '42897345435',
    mobilephone_billing: '3289241754',

    methodsDisable: ["CASH", "SP", "DP", "PSE"],
  }

  function handlePayment() {
    handler.open(data)
  }

  return (
    <div className="App">
      <button
        type="button"
        onClick={handlePayment}
      >
        Pagar
      </button>
    </div>
  );
}

export default App;
