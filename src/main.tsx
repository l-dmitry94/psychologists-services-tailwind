import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App';

import 'styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter basename="/psychologists-services-tailwind">
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
