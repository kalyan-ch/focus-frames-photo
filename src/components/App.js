
import React from 'react';
import './App.css';
import NavMenu from './NavMenu';
import HomeContent from './HomeContent';

const App = () => {

  const items = [
    {
      name: 'Home',
      type: 'text',
      link: '',
      index: 0
    }, {
      name: 'About Me',
      type: 'text',
      link: '',
      index: 1
    }, {
      name: 'Photos',
      type: 'text',
      link: '',
      index: 2
    }, {
      name: 'Contact',
      type: 'text',
      link: '',
      index: 3
    }, {
      name: '',
      type: 'icon',
      link: 'https://instagram.com/focusframes_photo',
      index: 4
    }
  ];

  return (
    <div>
      <NavMenu items={items} />
      <HomeContent />
    </div>
  );
}

export default App;
