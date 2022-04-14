import React, { useEffect, useState } from 'react'
import { getCompanyInfo } from '../services/SpacexService'

function Dashboard() {
  const[info, setInfo] = useState({})
  
  useEffect(() => {
    getCompanyInfo().then((data) => setInfo(data))
  },[])
  
  return (
    <div>
      <p>Name: {info.name}</p>
      <p>Founder: {info.founder}</p>
      <p>Founded: {info.founded}</p>
    </div>
  )
}

export default Dashboard