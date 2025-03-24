import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppInitial } from './HOC/app';
import './styles/base/main.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppInitial />
    </BrowserRouter>
  );
};

export default App;
