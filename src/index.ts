import { prisma } from "./db";

const crudMain = async() => {
  //Create
  const project = await prisma.project.create({
    data: {
      name: "Example Project",
      urgency: 1,
      size: 10,
      industry: "Example industry",
      description: "Example description"
    }
  });
  console.log("Created:", project)


  // Read
  const all = await prisma.project.findMany();
  console.log("All projects:" all);


  // Update
  const updated = await prisma.project.update({
    where: {id: project.id},
    data: {description: "Example description revised"}
  });
  console.log("Updated project:", updated)


  // Delete
  const deleted = await prisma.project.delete({
    where: {id: project.id}
  })
  console.log("Deleted:", deleted)

}


crudMain()
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })