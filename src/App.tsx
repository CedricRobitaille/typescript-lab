import { useState } from 'react'
import './App.css'

import Nav from './components/Nav/Nav';
import Header from './components/Header/Header'

type Views = 'home' | 'edit';

function App() {
  const [page, setPage] = useState<Views>("home")

  const handlePageChange = (view: string): void => {
    setPage(view);
  }

  return (
    <>
      <Nav page={page} handlePageChange={handlePageChange} />
      <main>
        {page === "home" && <Header title="Fleet Management App" body="Manage your fleet, all in one place!" />}
      </main>
    </>
  )
}

export default App
