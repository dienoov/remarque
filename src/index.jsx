import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import RemarqueApp from './components/RemarqueApp';

const root = createRoot(document.getElementById('root'));

root.render(<RemarqueApp />);
