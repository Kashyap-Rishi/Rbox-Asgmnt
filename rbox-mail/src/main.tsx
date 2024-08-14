import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeContextProvider } from './context/ThemeContext'
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(

    <ThemeContextProvider>
  <Provider store={store}>

        <App />
        </Provider>
    </ThemeContextProvider>
    
   
  
)