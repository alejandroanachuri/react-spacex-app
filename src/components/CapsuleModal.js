import React from 'react'

export default function CapsuleModal({stateChanger, capsuleModal}) {
  return (
    <>
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold text-white">
              {capsuleModal.capsule_serial} - {capsuleModal.capsule_id}
            </h3>
            <button onClick={() => stateChanger(false)}>
              <span className=" text-white">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-white text-lg leading-relaxed">
              Type: {capsuleModal.type}
            </p>
            <p className="my-4 text-white text-lg leading-relaxed">
              Original Launch: {new Date(Date.parse(capsuleModal.original_launch)).toString()}
            </p>
            <p className="my-4 text-white text-lg leading-relaxed">
              Details: {capsuleModal.details}
            </p>

          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => stateChanger(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
