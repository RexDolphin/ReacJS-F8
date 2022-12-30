import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {nanoid} from 'nanoid';
import { StoreProvider } from './store';
// import { ThemeProvider } from './ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Create Fake Comment
function emitComment(id){
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`,{
        detail:`Nội dung comment của lesson ${id}:${nanoid(id===1 ? 5 : id===2 ? 10 : 15)}`
      })
    // new CustomEvent(`lesson-${id}`,{
    //   detail:`Nội dung comment của lesson ${id}}`
    // });
    )
  }, 2000);
}
emitComment(1)
emitComment(2)
emitComment(3)
root.render(
  // <React.StrictMode>
  <StoreProvider>
     <App />,
    </StoreProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
