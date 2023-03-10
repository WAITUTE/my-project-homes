import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import image1 from './Images/10.jpg';
import image2 from './Images/20.jpg';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'My First Post',
      image: image1,
      body:
        "As an AI language model, I don't have feelings like humans, but I am here to assist you and help you solve your problems. Sometimes, things can be difficult to understand or solve, and it's perfectly normal to ask for help or seek guidance. Don't hesitate to ask questions or reach out for help if you're stuck on something.",
    },
    {
      id: 2,
      title: 'My Second Post',
      image: image2,
      body:
        "As an AI language model, I don't have feelings like humans, but I am here to assist you and help you solve your problems. Sometimes, things can be difficult to understand or solve, and it's perfectly normal to ask for help or seek guidance. Don't hesitate to ask questions or reach out for help if you're stuck on something.",
    },
    {
      id: 3,
      title: 'My Third Post',
      image: image2,
      body:
        "As an AI language model, I don't have feelings like humans, but I am here to assist you and help you solve your problems. Sometimes, things can be difficult to understand or solve, and it's perfectly normal to ask for help or seek guidance. Don't hesitate to ask questions or reach out for help if you're stuck on something.",
    },
  ]);

  return (
    <div className='App'>
      <Header title='Houses To Rent Near KU' />
      <Content items={items} />
      <Footer />
    </div>
  );
}

export default App;
