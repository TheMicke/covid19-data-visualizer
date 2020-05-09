import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
    <div style={{ maxWidth: '1280px', margin: 'auto' }}>
        <App />
    </div>
</BrowserRouter>, document.getElementById('root'));