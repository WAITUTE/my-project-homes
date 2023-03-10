import React from 'react'

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
            <li >Home</li>
            <li>Post</li>
            <li>About</li>
        </ul>
      
    </nav>
  )
}

export default Header