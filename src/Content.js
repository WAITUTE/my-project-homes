import React from 'react';

const Content = ({ items }) => {
  return (
    <main className='Content'>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <label>{item.title}</label>
            <div className='item-container'>
              <img
                src={item.image}
                alt={item.title}
              />
              <div className='info'>
                <p>{item.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );

};

export default Content;
