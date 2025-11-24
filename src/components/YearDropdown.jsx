import React, { useState } from 'react'

const YearDropdown = ({ setYear }) => {
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 1950 + 1 }, (_, idx) => currentYear - idx)
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div 
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <label className="sr-only" htmlFor="yearSelect">Year</label>
      <select
        id="yearSelect"
        className="bg-gray-800 text-white rounded-full px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        defaultValue=""
        onChange={(e) => {
          const selectedYear = e.target.value
          setYear(selectedYear)
          console.log(selectedYear)
        }}
      >
        <option value="" disabled>Year</option>
        {years.map(y => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
      {showTooltip && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-2 bg-gray-900 text-green-400 text-sm rounded-lg shadow-lg max-w-xs w-64 text-left leading-snug whitespace-normal wrap-break-word z-10">
          Search by year is not compatible with keyword searching. Please keep the search bar empty for year search.
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  )
}

export default YearDropdown
