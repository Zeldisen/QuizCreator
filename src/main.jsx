import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import questionReducer from './features/questionSlice'
import { Provider } from 'react-redux'


const store = configureStore({
  reducer: {
    quizQuestion: questionReducer
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
