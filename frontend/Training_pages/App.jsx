import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Over_View from './components/full_stack/Over_View';
import Joined from './components/intro/Joined'
import Full_Stack from './components/course/Full_Stack';
import Assignment from './components/Assignment/Assignment';
import Question from './components/Question/Question';
import "./index.css"
import Header from './components/Header/Header';
import CodeEditor from './components/Question/CodeEditor'


function App() {
  
  return (
    <div>
      <Header/>
    <BrowserRouter>
      <Routes>
         <Route path='/skill_center/Training_program/' element={<Joined/>}/>
         <Route path='/skill_center/Question/' element={<Question/>}/>
         <Route path='/skill_center/full_Stack/' element={<Over_View/>}/>
         <Route path='/skill_center/Course_details/' element={<Full_Stack/>}/>
         <Route path='/skill_center/Assignment/' element={<Assignment/>}/>
         <Route path='/skill_center/CodeEditor/' element={<CodeEditor/>}/>
         
      </Routes>
    </BrowserRouter>
    </div>
 
 )
}

export default App