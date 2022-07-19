import React from 'react';
import { createRoot } from 'react-dom/client';

import dummy from './utils/dummy';

const root = createRoot(document.getElementById('root'));

const el = (
  <ul>
    {dummy.map((data) => (
      <li>{data.title}</li>
    ))}
  </ul>
);

root.render(el);
