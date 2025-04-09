import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>Custom App function</div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <MyApp />
    <App />
    </>
    
)
