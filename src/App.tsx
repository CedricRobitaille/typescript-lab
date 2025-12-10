import { useState } from 'react'
import './App.css'

import Nav from './components/Nav/Nav';
import Header from './components/Header/Header'
import ProjectView from './components/ProjectView/ProjectView';
import NewProject from './components/NewProject/NewProject';

type Views = 'home' | 'edit' | 'new';

interface Project {
  name: string;
  urgency: number;
  size: number;
  industry: string;
}
type ProjectSchema = Project[]

function App() {
  const [page, setPage] = useState<Views>("home")
  // Either be an array of objects that follow the 
  const [projects, setProjects] = useState < ProjectSchema | [] > ([])

  const handlePageChange = (view: string): void => {
    setPage(view);
  }

  const handleCreateProject = (project: Project, e: any): void => {
    e.preventDefault();
    setPage("home")
    setProjects(prev => [...prev, project]);
  }

  return (
    <>
      <Nav page={page} handlePageChange={handlePageChange} />
      <main>

        {page === "home" && 
          <>
            <Header title="Fleet Management App" body="Manage your fleet, all in one place!" />
            <ProjectView projects={projects} />
          </>
        }

        {page === "new" && 
          <>
            <Header title="New Project" body="Define your project so your techs can get straight to work." />
            <NewProject handleCreateProject={handleCreateProject} />
          </>
        }


      </main>
    </>
  )
}

export default App
