import React from 'react';


const NewPost = ({handleSubmit,previewImage, setPreviewImage, postImage, setPostImage, postTitle, setPostTitle, postBody, setPostBody}) => {
  
 
  const handleImageChange = (e) => {
    const files = e.target.files;
    const urls = [];
    for (let i = 0; i < files.length; i++) {
      urls.push(URL.createObjectURL(files[i]));
    }
    setPostImage(files);
    setPreviewImage(urls);
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
          multiple
          files={postImage}
          onChange={handleImageChange}
        />
        {previewImage && previewImage.map((url, index) => (
          <img 
          key={index} 
          src={url} 
          alt={`Preview ${index}`} 
          style={{ maxWidth: '100%', marginTop: '10px' }} />
        ))}
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