import React from 'react'
import { useState } from 'react';

const NewPost = ({handleSubmit, postImage, setPostImage, postTitle, setPostTitle, postBody, setPostBody}) => {
  const [previewImage, setPreviewImage] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setPostImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <main className='NewPost'>
      <h1>New Post</h1>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title:</label>
        <input
          id='postTitle'
          type='text'
          required
          value={postTitle}
          onChange={(e) => setPostTitle (e.target.value)}
        />
        <label htmlFor='postImage'>Image:</label>
        <input
          id='postImage'
          type='file'
          required
          files={postImage}
          onChange={handleImageChange}
        />
        {previewImage && (
          <img src={previewImage} alt='Preview' style={{ maxWidth: '100%', marginTop: '10px' }} />
        )}
        <input
            id='postBody'
            type='text'
            placeholder="The House"
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default NewPost