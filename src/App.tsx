import { useState } from 'react'
import './App.css'

import Nav from './components/Nav/Nav';

type Views = 'home' | 'edit';

function App() {
  const [page, setPage] = useState<Views>("home")

  return (
    <>
      <Nav page={page} />
    </>
  )
}

export default App
