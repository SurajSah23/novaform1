import React from 'react'
import { ArrowLeft } from 'lucide-react'

function ParentPage({ onBack }) {
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
          {/* Parent Avatar */}
          <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center mb-8 mx-auto relative">
            {/* Woman emoji representation */}
            <div className="w-10 h-10 bg-amber-700 rounded-full absolute left-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-amber-600 rounded-full relative">
                <div className="w-1.5 h-1.5 bg-black rounded-full absolute top-2 left-2"></div>
                <div className="w-1.5 h-1.5 bg-black rounded-full absolute top-2 right-2"></div>
                <div className="w-2.5 h-1.5 bg-pink-400 rounded-full absolute bottom-2 left-2.5"></div>
              </div>
            </div>
            {/* Man emoji representation */}
            <div className="w-10 h-10 bg-orange-300 rounded-full absolute right-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-orange-200 rounded-full relative">
                <div className="w-1.5 h-1.5 bg-black rounded-full absolute top-2 left-2"></div>
                <div className="w-1.5 h-1.5 bg-black rounded-full absolute top-2 right-2"></div>
                <div className="w-2.5 h-1.5 bg-red-400 rounded-full absolute bottom-2 left-2.5"></div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome, Parent!
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            You've selected that you are a parent. Let's help you create a safe and engaging digital environment for your family.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Parental Controls</h3>
              <p className="text-gray-600 text-sm">Set up safe browsing and screen time limits for your children.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Family Dashboard</h3>
              <p className="text-gray-600 text-sm">Monitor and manage your family's digital activities in one place.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Educational Content</h3>
              <p className="text-gray-600 text-sm">Access curated educational resources for your children.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParentPage
