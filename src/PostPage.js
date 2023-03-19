import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PostPage = ({posts, handleDelete}) => {
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id)
  return (
    <main className='PostPage'>
      <article className='Content'>
          {post &&
            <ul>
              <li>
                  <label style= {{color: "white"}}>{post.title}</label>
                  <div className='post-container'>
                  {post.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={image}
                    
                    />
                  ))}
                    <div className='info'>
                          <p style= {{color: "white"}}>{post.body} </p>
                    </div>
                  </div>
                  <button className='deleteButton' onClick={() => handleDelete(post.id)}>
                    Post Delete
                  </button>
              </li>
            </ul>
          
          }
          {!post &&
          
          <dev className='m'>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing </p>
            <p>
              <Link to='/'>Visit Our HomePage</Link>
            </p>
          
          </dev>
          
          }
      </article>
    </main>
  )
}

export default PostPage