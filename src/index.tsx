import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { TranslatorContext } from './i18n';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <TranslatorContext>
                <App />
            </TranslatorContext>
        </BrowserRouter>
    </React.StrictMode>
);