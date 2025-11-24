import React from 'react'
import YearDropdown from './YearDropdown'

const SearchBar = ({ searchBarInput, setSearchBarInput, setYear }) => {
  const handleInputChange = (e) => {
    setSearchBarInput(e.target.value)
  }
  
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchBarInput}
            onChange={handleInputChange}
            className="w-full px-6 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
        </div>
        <YearDropdown setYear={setYear} />
      </div>
    </div>
  )
}

export default SearchBar