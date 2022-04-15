import React from 'react'

export default function MissionCard({mission}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 bg">{mission.mission_name}</div>
        <p className="text-gray-700 text-base">
          {mission.description}
        </p>
      </div>
    </div>
  )
}
