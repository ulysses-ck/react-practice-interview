import { useState } from "react";
import { useProject } from "../hooks/use-project";

export function Kata9() {
  const { addTask, changeName, project, removeTask } = useProject();
  const [newTask, setNewTask] = useState<string>("");

  const isProjectNameInvalid = project.projectName.trim() === "";
  const areTasksInvalid = project.tasks.length === 0;
  const isFormInvalid = isProjectNameInvalid || areTasksInvalid;


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if(!isFormInvalid) {
        changeName("");
        console.log(project);
    }
  };

  const handlePushTalk = () => {
    if (newTask.trim() !== "") {
        addTask(newTask);
        setNewTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        {isProjectNameInvalid && <span>Project name is required</span>}
      {areTasksInvalid && <span>At least one task is required</span>}

      <div>
        <label htmlFor="project-name">Project name</label>
        <input
          type="text"
          name="project-name"
          id="project-name"
          value={project.projectName}
          onChange={(e) => changeName(e.currentTarget.value)}
        />

        <div>
          <label htmlFor="new-task">Nueva tarea</label>
          <input
            type="text"
            name="new-task"
            id="new-task"
            value={newTask}
            onChange={(e) => setNewTask(e.currentTarget.value)}
          />

          <button type="button" onClick={handlePushTalk}>
            Add task
          </button>
        </div>
      </div>

      <ul>
        {project.tasks.length > 0 &&
          project.tasks.map((t, idx) => (
            <li key={idx}>
              <span>{t}</span>
              <button onClick={() => removeTask(idx)}>Delete task</button>
            </li>
          ))}
      </ul>
      <button type="submit" disabled={isFormInvalid}>
          Submit
      </button>
    </form>
  );
}
