import "./NewProject.css"

import { useState } from "react";

type FormData = {
  name: string,
  urgency: number,
  size: number,
  industry: string,
  description: string
}

interface Props {
  handleCreateProject: (data: FormData) => void
}

const NewProject = ({handleCreateProject}: Props) => {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    urgency: 0,
    size: 1,
    industry: "",
    description: ""
  })

  // What kind of data primative is the 'event' keyword under!?!?!?!
  // Until I figure that out... she'll have to remain a "any"
  const handleInputChange = (e: any) => {
    type valType = string | number
    let value: valType = e.target.value
    if (e.target.name === "urgency" || e.target.name === "size") {
      value = Number(value)
    }
    setFormData({ ...formData, [e.target.name]: value })
  }


  return (
    <form onSubmit={(e) => { handleCreateProject(formData,e) }}>
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

      <button type="submit">Create project</button>
    </form>
  )
}

export default NewProject;