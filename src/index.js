import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Faq from './FaqQuestion/Faq';
import Pass from './Datapass/Pass';
import MyComponent from './ReactMemo/Reactmemo';
import { Header } from './Chatgpt/Header';
import Simpletask from './Simpletask';
import Formtask from './Task/Formtask';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Pass/>
    <MyComponent/> */}
    {/* <Header /> */}
    {/* <Faq /> */}
    <Simpletask logo={"Brand Jay"}/>
    <Formtask />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
