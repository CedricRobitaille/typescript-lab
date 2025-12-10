interface Projects {
  name: string;
  urgency: number;
  size: number;
  industry: string;
}
type ProjectSchema = Projects[]

const ProjectView = ({ projects }: ProjectSchema) => {

  

  return (
    <div>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectView;