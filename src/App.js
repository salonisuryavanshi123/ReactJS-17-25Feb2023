//1. Import Area
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

//2. Defination Area
export default function App() {

 let routes=[
            {
                path:"",
                element:<Home />
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/register",
                element:<Register />
            }
        ]

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                {/*array.map(cv,idx,arr)*/}
                {
                    routes.map((cv,idx,arr)=>{
                        return <Route path={cv.path} element={cv.element}></Route>
                    })
                }
                </Route>
                
            </Routes>
        </BrowserRouter>
  )
}

//3. Export Area
