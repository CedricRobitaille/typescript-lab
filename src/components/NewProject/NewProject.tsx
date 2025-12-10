import "./NewProject.css"

import { useState } from "react";

type FormData = {
  name: string,
  urgency: number,
  size: number,
  industry: string
}

interface Props {
  handleCreateProject: (data: FormData) => void
}

const NewProject = ({handleCreateProject}: Props) => {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    urgency: 1,
    size: 1,
    industry: ""
  })

  // What kind of data primative is the 'event' keyword under!?!?!?!
  // Until I figure that out... she'll have to remain a "any"
  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }


  return (
    <form onSubmit={(e) => { handleCreateProject(formData,e) }}>
      <label htmlFor="name">Project Name</label>
      <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange}/>

      <button type="submit">Create project</button>
    </form>
  )
}

export default NewProject;