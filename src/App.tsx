import React from 'react';
import logo from './logo.svg';
import './App.css';

{/*
  작성자 : yoo
  작성일 : 29.10.2024
  내용 : 기능에 대한 내용 및 실습  
*/}

function App() {
  let name = "React";

  return (
    <div className="container">
      <h1 className='test'>Hello,
        {
        name === 'React' ? (<h1>YES</h1>): null
        }!!</h1>
      <p>반갑습니다.</p>
    </div>
  );
}

export default App;
