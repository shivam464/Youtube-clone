import { useState } from 'react'
import {
  RouterProvider,
  
} from "react-router-dom";
import './App.css'

import router from '../src/Routers';
import Header from './layout/Header';
function App() {

  return (
    <>
    <Header />
      <p className="text-3xl font-bold underline text-center">Hello world!ddd</p> 
      <RouterProvider router={router} />
    </>
  )
}

export default App
