import { useState } from "react";
import type { IProject } from "../types/IProject";

export function useProject() {
  const [project, setProject] = useState<IProject>({
    projectName: "",
    tasks: [],
  });

  const changeName = (name: string) =>
    setProject((prevProject) => ({
      ...prevProject,
      projectName: name,
    }));

  const removeTask = (idx: number) =>
    setProject((prevProject) => ({
      ...prevProject,
      tasks: prevProject.tasks.filter((_, index) => idx !== index),
    }));

  const addTask = (task: string) =>
    setProject((prevProject) => ({
      ...prevProject,
      tasks: [...prevProject.tasks, task],
    }));

  return {
    project,
    changeName,
    removeTask,
    addTask,
  };
}
