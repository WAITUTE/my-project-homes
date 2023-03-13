import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({title,search, setSearch}) => {
  return (
    <nav className="Nav">
        <header className='Header'>{title}</header>
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search Posts</label>
            <input
            id="search"
            type="text"
            placeholder="Search Posts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </form>
        <ul>
        <li>
          <Link to='/' style= {{color: "white"}}>Home</Link>
        </li>
        <li>
          <Link to='/post' style= {{color: "white"}}>Post</Link>
        </li>
        <li>
          <Link to='/about' style= {{color: "white"}}>About</Link>
        </li>
      </ul>
      
    </nav>
  )
}

export default Header