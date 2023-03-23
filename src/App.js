import Header from './Header';
import Content from './Content';
import Missing from './Missing';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import About from './About';
import Footer from './Footer';
import image1 from './Images/10.jpg';
import image2 from './Images/20.jpg';
import image3 from './Images/30.jpeg'
import { useState, useEffect} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import api from './api/posts';

function App() {
  
const [posts, setPosts] = useState([]);
const [search, setSearch] = useState('');
const [searchResults, setSearchResults] = useState([]);
const [postTitle, setPostTitle] = useState('');
const [postBody, setPostBody] = useState('');
const [editTitle, setEditTitle] = useState('');
const [editBody, setEditBody] = useState('');
const [editImage, setEditImage] = useState('')
const [postImage, setPostImage] = useState([]);
const [previewImage, setPreviewImage] = useState([]);


const navigate = useNavigate();


useEffect(() => {
 const fetchPosts = async () => {
  try{
    const response = await api.get('/posts');
    setPosts(response.data);

  } catch(err){
    if(err.response){
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else{
      console.log(`Error: ${err.message}`);
    }
  }
 }
 fetchPosts();
},[])
useEffect(() => {
  const filterResults = posts.filter(post => (
    (post.body).toLowerCase()).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filterResults.reverse());
}, [posts, search]);
const handleDelete = async (id) =>{
  try{
    await api.delete(`/posts/${id}`)
    const postList = posts.filter(post => post.id !== id);
    setPosts(postList);
    navigate('/');
  }catch(err){
    console.log(`Error: ${err.message}`);
  }
}
const handleSubmit = async (e) => {
  e.preventDefault();
  const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  const newPostImages = previewImage;
  const newPost = {
    id,
    title: postTitle,
    images: newPostImages,
    body: postBody,
  };
  try{
    const response = await api.post('/posts', newPost)
  setPosts([...posts, response.data]);
  setPostTitle('');
  setPostBody('');
  setPostImage([]);
  setPreviewImage([]);
  navigate('/');
  } catch(err){
    console.log(`Error: ${err.message}`);
  }
};
const handleEdit = async (id) => {
  const updatedPost = {id, title: editTitle, images: editImage, body: editBody };
  try{
    const response =await api.put(`/posts/${id}`, updatedPost);
    setPosts(posts.map(post => post.id === id ? {...response.data} : post));
    setEditBody('');
    setEditImage('');
    setEditTitle('');
    navigate('/');
  }catch(err){
    console.log(`Error: ${err.message}`);
  }
}

  return (
    <div className='App'>
      <Header title='Houses To Rent Near KU' search = {search} setSearch={setSearch} />   
      <Routes>
        <Route path='/' element={ <Content Posts={searchResults} />} />
        <Route path='/post' element={<NewPost 
                postTitle={postTitle} 
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
                handleSubmit={handleSubmit}
                postImage = {postImage}
                setPostImage={setPostImage}
                previewImage={previewImage}
                setPreviewImage={setPreviewImage}

               
        />} />
        <Route path='/edit/:id' element={<EditPost 
              editTitle={editTitle} 
              setEditTitle={setEditTitle}
              editBody={editBody}
              setEditBody={setEditBody}
              handleEdit={handleEdit}
              editImage = {editImage}
              setEditImage={setEditImage}
              previewImage={previewImage}
              setPreviewImage={setPreviewImage}
        
        />} />
        <Route path='/post/:id' element={<PostPage posts={posts} handleDelete={handleDelete}/>} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
