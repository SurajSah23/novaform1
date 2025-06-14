import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ChildNameForm = () => {
  const [name, setName] = useState('')
  const [selectedGender, setSelectedGender] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  const age = location.state?.age

  const handleContinue = () => {
    if (name.trim() && selectedGender) {
      navigate('/welcome', {
        state: {
          name: name.trim(),
          gender: selectedGender,
          age,
        },
      })
    }
  }

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender)
  }

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-6 sm:mb-8">
          Child's name
        </h1>

        <div className="space-y-6">
          {/* Name Input */}
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full px-4 py-3 rounded-xl border-2 border-gray-300
                focus:border-purple-500 focus:outline-none
                text-base sm:text-lg placeholder-gray-400
                transition-colors duration-200
              "
            />
          </div>

          {/* Gender Selection */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleGenderSelect('boy')}
              className={`
                flex-1 py-3 px-6 rounded-full border-2 border-purple-300
                flex items-center justify-center gap-2 text-base sm:text-lg font-medium
                transition-all duration-200 hover:scale-105
                ${
                  selectedGender === 'boy'
                    ? 'bg-purple-100 border-purple-500 text-purple-700'
                    : 'bg-white text-gray-700 hover:bg-purple-50'
                }
              `}
            >
              <span className="text-xl">👦</span>
              Boy
            </button>

            <button
              onClick={() => handleGenderSelect('girl')}
              className={`
                flex-1 py-3 px-6 rounded-full border-2 border-purple-300
                flex items-center justify-center gap-2 text-base sm:text-lg font-medium
                transition-all duration-200 hover:scale-105
                ${
                  selectedGender === 'girl'
                    ? 'bg-purple-100 border-purple-500 text-purple-700'
                    : 'bg-white text-gray-700 hover:bg-purple-50'
                }
              `}
            >
              <span className="text-xl">👧</span>
              Girl
            </button>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            disabled={!name.trim() || !selectedGender}
            className={`
              w-full py-4 rounded-full text-base sm:text-lg font-semibold
              transition-all duration-200
              ${
                name.trim() && selectedGender
                  ? 'bg-gray-400 text-white hover:bg-gray-500 active:scale-95'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }
            `}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChildNameForm
