import React, { useState, useEffect } from 'react'
import { getCapsules } from '../services/SpacexService'

export default function Capsules() {
  const [capsules, setCapsules] = useState([])

  useEffect(() => {
    getCapsules().then(setCapsules)
  }, [])
  

  return (
    <div>
      Capsules
      <ul>
        {capsules.map(capsule => (
          <li key={capsule.capsule_serial}>{capsule.capsule_id}</li>
        ))}
      </ul>
    </div>
  )
}
