import { useState } from "react";

type Project = {
  id: number;
  name: string;
  urgency: number;
  size: number;
  industry: string;
  description: string;
}
type Props = {
  project: Project;
  handleEditProject: (project: Project, e: any) => void
}

const EditProject = ({ project, handleEditProject }: Props) => {
  console.log(project)

  const [formData, setFormData] = useState<Project>(project)


  const handleInputChange = (e:any): void => {
    type valType = string | number
    let value: valType = e.target.value
    if (e.target.name === "urgency" || e.target.name === "size") {
      value = Number(value)
    }
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={(e: any) => { handleEditProject(formData, e) }}>
      <div className="form-split">
        <div className="input-col">
          <label htmlFor="name">Project Name</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div className="input-col">
          <label htmlFor="industry">Project Industry</label>
          <input type="text" name="industry" id="industry" value={formData.industry} onChange={handleInputChange} />
        </div>
      </div>


      <div className="form-split">
        <div className="input-col">
          <label htmlFor="urgency">Urgency Level</label>
          <select name="urgency" id="urgency" value={formData.urgency} onChange={handleInputChange}>
            <option value="0">Low Priority</option>
            <option value="1">Medium Priority</option>
            <option value="2">High Priority</option>
            <option value="3">Urgent</option>
          </select>
        </div>
        <div className="input-col">
          <label htmlFor="size">Project Size</label>
          <input type="number" name="size" id="size" value={formData.size} onChange={handleInputChange} />
        </div>
      </div>

      <div className="input-col">
        <label htmlFor="description">Project Description</label>
        <textarea name="description" id="description" value={formData.description} onChange={handleInputChange}></textarea>
      </div>

      <button type="submit">Save Changes</button>
    </form>
  )
}

export default EditProject