 // component imorts 
 import App from './App.jsx'
 // CSS imports 
 import './index.css'  
 // Labriry imports 
 import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

 ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <App />
   <Toaster />
    </BrowserRouter>
 );
