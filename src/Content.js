import React from 'react';
import { Link } from 'react-router-dom';

const Content = ({ Posts }) => {
  return (
    <main className='Content'>
      <ul>
        {Posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
                <label style= {{color: "white"}} >{post.title}</label>
            </Link>
                <div className='post-container'>
                    <Link to={`/post/${post.id}`}><img
                                src={post.image}
                                alt={post.title}
                    /></Link>
                    <div className='info'>
                      <p style= {{color: "white"}} >{(post.body).length <= 25 
                          ? post.body
                          : `${(post.body).slice(0, 35)}...`}
                      </p>
                  </div>
                </div>
            
          </li>
        ))}
      </ul>
    </main>
  );

};

export default Content;
