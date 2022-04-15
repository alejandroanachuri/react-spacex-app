import React, { useState, useEffect } from 'react'
import { getCapsules } from '../services/SpacexService'
import CapsuleCard from './CapsuleCard'
import CapsuleModal from './CapsuleModal'

export default function Capsules() {
  const [capsules, setCapsules] = useState([])

  useEffect(() => {
    getCapsules().then(setCapsules)
  }, [])
  

  return (
    <div>
        <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Capsules</h1>
    </div>
      </header>
      <main>
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
     
      <div className="px-4 py-6 sm:px-0 grid grid-cols-4 gap-4">
      {capsules.map(capsule => (
          <div key={capsule.capsule_serial}>
            <CapsuleCard capsule={capsule}/> 
          </div>
        ))}
      </div>
      
    </div>
  </main>

      
    </div>
  )
}
