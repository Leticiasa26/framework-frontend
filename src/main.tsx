import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pagina from './Pagina'

//import Container from './container.tsx'


createRoot (document.getElementById ('root') ! ) .render (

  <StrictMode>

    {/* <Container nome = 'Header'/>
    <Container nome = 'Body'/>
    <Container nome = 'Footer'/> */}

    <Pagina/>

  </StrictMode>,

)
