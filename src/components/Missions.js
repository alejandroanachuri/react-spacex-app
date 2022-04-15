import React, { useState, useEffect } from 'react'
import { getMissions } from '../services/SpacexService'
import MissionCard from './MissionCard'

export default function Missions() {
  const [missions, setMissions] = useState([])

  useEffect(() => {
    getMissions().then(setMissions)
  }, [])

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Missions</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

          <div className="px-4 py-6 sm:px-0 grid grid-cols-4 gap-4">
            {missions.map(mission => (
              <div key={mission.mission_id}>
                <MissionCard  mission={mission} />
              </div>
            ))}

          </div>

        </div>
      </main>


    </div>
  )
}
