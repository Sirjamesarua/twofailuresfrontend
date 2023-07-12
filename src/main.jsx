import React from 'react'
import './styles/index.scss';
import './styles/utilities.scss';
import './layouts/layout.scss'
import './components/componentStyles.scss'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
