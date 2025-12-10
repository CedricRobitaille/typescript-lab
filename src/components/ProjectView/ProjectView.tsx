type Project = {
  id: number;
  name: string;
  urgency: number;
  size: number;
  industry: string;
  description: string;
}
type ProjectSchema = Project[]

type Props = {
  projects: ProjectSchema;
  handleStartEdit: (project: number) => void
}

const ProjectView = ({ projects, handleStartEdit }: Props) => {

  
  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <button onClick={() => { handleStartEdit(project.id) }}>Edit Project</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectView;