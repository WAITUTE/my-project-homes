import React from 'react';




const Nav = ({ search, setSearch }) => {

  return (
    <nav className="Nav">
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
  );
};

export default Nav;