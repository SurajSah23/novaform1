import React from 'react'
import { ArrowLeft } from 'lucide-react'

function ChildPage({ onBack }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Progress Bar */}
      <div className="w-full px-8 pt-8">
        <div className="max-w-2xl mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full transition-all duration-500" style={{ width: '40%' }}></div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="px-8 pt-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={20} />
          Back
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="max-w-4xl w-full text-center">
          {/* Child Avatar */}
          <div className="w-32 h-32 bg-green-400 rounded-full flex items-center justify-center mb-8 mx-auto">
            {/* Child emoji representation */}
            <div className="w-16 h-16 bg-amber-600 rounded-full relative flex items-center justify-center">
              <div className="w-14 h-14 bg-amber-500 rounded-full relative">
                <div className="w-2 h-2 bg-black rounded-full absolute top-3 left-3"></div>
                <div className="w-2 h-2 bg-black rounded-full absolute top-3 right-3"></div>
                <div className="w-4 h-2 bg-pink-400 rounded-full absolute bottom-3 left-5"></div>
                {/* Hair */}
                <div className="w-12 h-6 bg-amber-800 rounded-t-full absolute -top-1 left-1"></div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Hi there, kiddo! 👋
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Welcome to your safe digital playground! Let's explore fun and educational activities together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="text-2xl">🎮</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Fun Games</h3>
              <p className="text-gray-600 text-sm">Play educational games that help you learn while having fun!</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="text-2xl">📚</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Stories & Books</h3>
              <p className="text-gray-600 text-sm">Read amazing stories and discover new worlds through books.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="text-2xl">🎨</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Creative Corner</h3>
              <p className="text-gray-600 text-sm">Draw, paint, and create amazing artwork digitally!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChildPage
