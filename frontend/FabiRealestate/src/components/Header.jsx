/*import { FaSearch } from 'react-icons/fa';
 import { Link, useNavigate } from 'react-router-dom';
 import { useSelector } from 'react-redux';
 import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Fabi</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
            
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}*/

import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    navigate(`/search?${urlParams.toString()}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-gray-800 shadow-md text-white">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="font-semibold text-2xl">
            <span className="text-indigo-500">Fabi</span>
            <span className="text-gray-300">Estate</span>
          </h1>
        </Link>

        {/* Search Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-700 p-2 rounded-lg flex items-center space-x-2 max-w-xl w-full"
        >
          <input
            type="text"
            placeholder="Search listings..."
            className="bg-transparent focus:outline-none w-full p-2 text-white placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" aria-label="Search">
            <FaSearch className="text-gray-300 hover:text-white transition duration-200" />
          </button>
        </form>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <Link to="/">
            <li className="text-gray-200 hover:text-white transition duration-200">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-gray-200 hover:text-white transition duration-200">About</li>
          </Link>

          <Link to="/profile" className="flex items-center space-x-2">
            {currentUser ? (
              <img
                className="rounded-full h-8 w-8 object-cover"
                src={currentUser.avatar}
                alt="Profile"
              />
            ) : (
              <li className="text-gray-200 hover:text-white transition duration-200">Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
