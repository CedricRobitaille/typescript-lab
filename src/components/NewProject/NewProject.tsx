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


  return (
    <form onSubmit={() => { handleCreateProject(formData) }}>

    </form>
  )
}

export default NewProject;