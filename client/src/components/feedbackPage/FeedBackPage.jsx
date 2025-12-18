import React, { useState } from 'react'
import Navbar from '../homePage/homePageComponents/topSection/navBar/navbar'
import { Star, X } from 'lucide-react'
import PhoneNavBar from '../homePage/homePageComponents/topSection/navBar/PhoneNavBar'
import bookStoreLogo from '../../assets/logos/bookStoreLogo.svg'

const FeedBackPage = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [showError, setShowError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    if (!formData.name || !formData.email || !formData.message || rating === 0) {
      setShowError(true)
      return
    }

    try {
      setIsSubmitting(true)

      // POST request to backend
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          rating
        })
      })

      if (!response.ok) {
        throw new Error('Failed to submit feedback')
      }

      // Reset form after success
      setFormData({ name: '', email: '', message: '' })
      setRating(0)
      alert('Feedback submitted successfully!')
    } catch (error) {
      console.error(error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 font-[Poppins]">
      <Navbar />
      {/* Mobile-only logo */}
        <a href="/" className="block lg:hidden w-full py-4">
            <div className="flex justify-center items-center">
            <img
                src={bookStoreLogo}
                alt="Book Store Logo"
                className="h-[72px] w-auto" // Adjust size as needed
            />
            </div>
        </a>

      {/* Error Modal */}
      {showError && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-lg relative">
            <button
              onClick={() => setShowError(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Submission Error
            </h3>
            <p className="text-sm text-gray-600">
              All fields including rating are mandatory. Please fill in all the details before submitting.
            </p>
          </div>
        </div>
      )}

      {/* Page Wrapper */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-12 pt-8 md:pb-10 pb-22">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
            We Value Your Feedback
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Your feedback helps us improve our services and deliver a better experience.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Info Section */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-medium text-gray-800 mb-4">
              Why Your Feedback Matters
            </h2>
            <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
              <li>• Helps us understand your needs better</li>
              <li>• Improves product & service quality</li>
              <li>• Shapes future updates and features</li>
              <li>• Ensures a smoother user experience</li>
            </ul>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Rate Your Experience <span className="text-red-500">*</span>
              </h3>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={28}
                    className={`cursor-pointer transition-colors ${
                      (hover || rating) >= star
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-medium text-gray-800 mb-6">
              Share Your Thoughts
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Feedback <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your feedback here..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 text-white py-3 font-medium hover:opacity-90 transition disabled:opacity-60"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-500">
          Thank you for taking the time to help us improve 🌟
        </div>
      </div>
      <PhoneNavBar />
    </div>
  )
}

export default FeedBackPage