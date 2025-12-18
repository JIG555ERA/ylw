import React, { useEffect, useState } from 'react'
import { X, MapPin } from 'lucide-react'

const PincodeAvailabilityChecker = () => {
  const [visible, setVisible] = useState(true)
  const [pincode, setPincode] = useState('')
  const [status, setStatus] = useState(null) // 'available' | 'unavailable'
  const [loading, setLoading] = useState(false)

  const handleCheckAvailability = async () => {
    if (!pincode || pincode.length !== 6) return

    try {
      setLoading(true)

      const res = await fetch('/api/check-pincode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pincode })
      })

      const data = await res.json()
      setStatus(data.available ? 'available' : 'unavailable')

      // Auto hide after 3 seconds
      setTimeout(() => {
        setVisible(false)
      }, 3000)
    } catch (err) {
      console.error(err)
      setStatus('unavailable')
      setTimeout(() => setVisible(false), 3000)
    } finally {
      setLoading(false)
    }
  }

  if (!visible) return null

  return (
    <div className="fixed md:bottom-4 bottom-24 right-4 left-4 sm:left-auto sm:w-[380px] z-50">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-4 relative">
        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="text-purple-500" size={20} />
          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
            Check Delivery Availability
          </h4>
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <input
            type="number"
            maxLength={6}
            value={pincode}
            onChange={(e) => setPincode(e.target.value.slice(0, 6))}
            placeholder="Enter Pincode"
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <button
            onClick={handleCheckAvailability}
            disabled={loading || pincode.length !== 6}
            className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 text-sm font-medium disabled:opacity-60"
          >
            {loading ? 'Checking...' : 'Check'}
          </button>
        </div>

        {/* Status */}
        {status && (
          <div
            className={`mt-3 text-sm font-medium rounded-lg px-3 py-2 text-center ${
              status === 'available'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {status === 'available'
              ? 'Delivery available at your location 🎉'
              : 'Sorry, delivery is not available at this pincode'}
          </div>
        )}
      </div>
    </div>
  )
}

export default PincodeAvailabilityChecker
