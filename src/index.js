import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "../../../DEVOPS/shield-bank(frontend)/src/dev";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}>
                <App/>
            </DevSupport>
        </BrowserRouter>
    </React.StrictMode>
);
