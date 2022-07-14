import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./Layout/Layout"
import Inicio from "./Paguinas/Inicio"
import NuevoCliente from './Paguinas/NuevoCliente'
import EditarCliente from './Paguinas/EditarCliente'


function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/clientes" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="nuevo" element={<NuevoCliente />} />
            <Route path="editar/:id" element={<EditarCliente />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
