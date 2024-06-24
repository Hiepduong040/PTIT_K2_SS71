import React from 'react'
import Ex01 from './components/Ex01/Ex01'
import Ex02 from './components/Ex02/Ex02'
import Ex03 from './components/Ex03/Ex03'
import Ex04 from './components/Ex04/Ex04'
import Ex05 from './components/Ex05/Ex05'
import Ex06 from './components/Ex06/Ex06'
import Ex07 from './components/Ex07/Ex07'
import Login from './components/Ex08/Login'
import Logined from './components/Ex08/Logined'
export default function App() {
  return (
    <div>
      <Ex01></Ex01>
      <Ex02></Ex02>
      <Ex03></Ex03>
      <Ex04></Ex04>
      <Ex05></Ex05>
      <Ex06></Ex06>
      <Ex07></Ex07>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/logined" element={<Logined />}></Route>
      </Routes>
    </div>
  )
}