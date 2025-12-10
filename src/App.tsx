import { useState } from 'react'
import './App.css'

import Nav from './components/Nav/Nav';
import Header from './components/Header/Header'
import ProjectView from './components/ProjectView/ProjectView';
import NewProject from './components/NewProject/NewProject';
import EditProject from './components/EditProject/EditProject';


type Views = 'home' | 'edit' | 'new';

interface Project {
  id: number;
  name: string;
  urgency: number;
  size: number;
  industry: string;
  description: string;
}
type ProjectSchema = Project[]

function App() {
  const [page, setPage] = useState<Views>("home")
  // Either be an array of objects that follow the 
  const [projects, setProjects] = useState < ProjectSchema | [] > ([])
  const [currentProject, setCurrentProject] = useState<Project | null>(null)

  const handlePageChange = (view: string): void => {
    setPage(view);
  }

  const handleCreateProject = (project: Project, e: any): void => {
    e.preventDefault();
    setPage("home")
    project.id = projects.length;
    console.log(project)
    setProjects(prev => [...prev, project]);
  }

  const handleEditProject = (project: Project, e: any): void => {
    e.preventDefault();
    setPage("home")
    setProjects(prev => prev.map(proj => proj.id === project.id ? project : proj))
  }

  const handleStartEdit = (index: number): void => {
    setCurrentProject(projects[index])
    setPage("edit")
  }

  return (
    <>
      <Nav page={page} handlePageChange={handlePageChange} />
      <main>

        {page === "home" && 
          <>
            <Header title="Fleet Management App" body="Manage your fleet, all in one place!" />
            <ProjectView projects={projects} handleStartEdit={handleStartEdit} />
          </>
        }

        {page === "new" && 
          <>
            <Header title="New Project" body="Define your project so your techs can get straight to work." />
            <NewProject handleCreateProject={handleCreateProject} />
          </>
        }

        {page === "edit" &&
          <>
            <Header title="Edit Project" body="Let's rework this project to better fit your needs." />
            <EditProject project={currentProject} handleEditProject={handleEditProject} />
          </>
        }


      </main>
    </>
  )
}

export default App
