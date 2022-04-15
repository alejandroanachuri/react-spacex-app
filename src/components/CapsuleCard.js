import React, { useState, useEffect } from 'react'
import { getCapsule } from '../services/SpacexService';
import CapsuleModal from './CapsuleModal';

export default function CapsuleCard({ capsule }) {
  const [showModal, setShowModal] = useState(false);
  const [capsuleModal, setCapsuleModal] = useState({})
  const status = capsule.status === "retired" ? true : false

  useEffect(() => {
    if (showModal) {
      getCapsule(capsule.capsule_serial).then(setCapsuleModal)
    }
  }, [showModal])


  return (
    <>
      <button className="max-w-sm rounded overflow-hidden shadow-lg" type="button" onClick={() => setShowModal(true)}>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 bg">{capsule.capsule_serial} - {capsule.capsule_id}</div>
          <p>Type: {capsule.type}</p>
          <p className="text-gray-700 text-base">Details:
            {capsule.details}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className={`inline-block ${status ? 'bg-red-600' : 'bg-green-600'}  rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2`}>{capsule.status}</span>
        </div>
      </button>
      {(showModal && !(JSON.stringify(capsuleModal) === '{}')) ? (
        <CapsuleModal stateChanger={setShowModal} capsuleModal={capsuleModal} />

      ) : null}
  
    </>    

  )
}
