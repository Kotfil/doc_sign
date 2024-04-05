import React from 'react';
import ReactDOM from 'react-dom/client';

import './i18n'
import {I18nProvider} from "./components/i18n/i18n.provider";
import {App} from "./app";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <I18nProvider>
            <App/>
        </I18nProvider>
        </BrowserRouter>
    </React.StrictMode>
);


