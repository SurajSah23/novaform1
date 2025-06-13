import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ChildAgeSelector = () => {
  const [selectedAge, setSelectedAge] = useState(null)
  const [showMore, setShowMore] = useState(false)
  const navigate = useNavigate()

  const handleAgeSelect = (age) => {
    setSelectedAge(age)
    setTimeout(() => {
      navigate('/name', { state: { age } })
    }, 300)
  }

  const handleMoreClick = () => {
    setShowMore(true)
  }

  const renderAgeButton = (age) => (
    <button
      key={age}
      onClick={() => handleAgeSelect(age)}
      className={`
        w-16 h-16 rounded-full border-2 border-purple-300 bg-white hover:bg-violet-500
        flex items-center justify-center text-lg font-semibold text-gray-800
        transition-all duration-200 hover:scale-105 hover:shadow-lg
        ${selectedAge === age ? 'bg-purple-100 border-purple-500 scale-105' : ''}
        active:scale-95
      `}
    >
      {age}
    </button>
  )

  const renderMoreButton = () => (
    <button
      onClick={handleMoreClick}
      className="
        w-16 h-16 rounded-full border-2 border-purple-300 bg-white
        flex items-center justify-center text-sm font-semibold text-purple-600
        transition-all duration-200 hover:scale-105 hover:shadow-lg
        active:scale-95
      "
    >
      more
    </button>
  )

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Child's age
      </h1>
      
      <div className="grid grid-cols-5 gap-4 justify-items-center">
        {!showMore ? (
          <>
            {[4, 5, 6, 7, 8].map(renderAgeButton)}
            {[9, 10, 11, 12].map(renderAgeButton)}
            {renderMoreButton()}
          </>
        ) : (
          <>
            {[4, 5, 6, 7, 8].map(renderAgeButton)}
            {[9, 10, 11, 12, 13].map(renderAgeButton)}
            {[14, 15, 16, 17].map(renderAgeButton)}
          </>
        )}
      </div>
    </div>
    
  )
}

export default ChildAgeSelector
