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

function App() {
  
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'My First Post',
      images: [image1, image2],
      body:
        "As an AI language model, I don't have feelings like humans, but I am here to assist you and help you solve your problems. Sometimes, things can be difficult to understand or solve, and it's perfectly normal to ask for help or seek guidance. Don't hesitate to ask questions or reach out for help if you're stuck on something.",
    },
    {
      id: 2,
      title: 'My Second Post',
      images: [image2, image1],
      body:
        "As an AI language model, I don't have feelings like humans, but I am here to assist you and help you solve your problems. Sometimes, things can be difficult to understand or solve, and it's perfectly normal to ask for help or seek guidance. Don't hesitate to ask questions or reach out for help if you're stuck on something.",
    },
    {
      id: 3,
      title: 'My Third Post',
      images: [image3, image2],
      body:
        "As an AI language model, I don't have feelings like humans, but I am here to assist you and help you solve your problems. Sometimes, things can be difficult to understand or solve, and it's perfectly normal to ask for help or seek guidance. Don't hesitate to ask questions or reach out for help if you're stuck on something.",
    },
  ]);
  
const [search, setSearch] = useState('');
const [searchResults, setSearchResults] = useState([]);
const [postTitle, setPostTitle] = useState(null);
const [postBody, setPostBody] = useState('');
const [postImage, setPostImage] = useState([]);
const [previewImage, setPreviewImage] = useState([]);


const navigate = useNavigate();

useEffect(() => {
  const filterResults = posts.filter(post => (
    (post.body).toLowerCase()).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filterResults.reverse());
}, [posts, search]);
const handleDelete = (id) =>{
    const postList = posts.filter(post => post.id !== id);
    setPosts(postList);
    navigate('/');
}
const handleSubmit = (e) => {
  e.preventDefault();
  const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  const newPostImages = previewImage;
  const newPost = {
    id,
    title: postTitle,
    images: newPostImages,
    body: postBody,
  };
  setPosts([...posts, newPost]);
  setPostTitle('');
  setPostBody('');
  setPostImage([]);
  setPreviewImage([]);
  navigate('/');
};
const handleEdit = () => {

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
        <Route path='/edit/:id' element={<EditPost />} />
        <Route path='/post/:id' element={<PostPage posts={posts} handleDelete={handleDelete}/>} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
