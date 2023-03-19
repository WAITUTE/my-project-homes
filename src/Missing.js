import React from 'react';
import {Link} from 'react-router-dom';

const Missing = () => {
  return (
    <main className='Missing'>
      <h2>Page Not found</h2>
      <p>Well, that's disappointing</p>
      <p>
        <Link to='/' style={{color: 'white'}}>Visit Out HomePage</Link>
      </p>
    </main>
  )
}

export default Missing