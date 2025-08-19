import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './componentes/Layout'
import Rutas from './componentes/Rutas'

function App() {
  return (
    <div>
      <Layout>
        <Rutas />
      </Layout>
    </div>
  )
}

export default App