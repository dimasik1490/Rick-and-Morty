import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { GoogleOAuthProvider } from '@react-oauth/google';

//207069539340-8p2j836jfs1qiv5cbe0e3pu1chnhtd8c.apps.googleusercontent.com


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="207069539340-8p2j836jfs1qiv5cbe0e3pu1chnhtd8c.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);