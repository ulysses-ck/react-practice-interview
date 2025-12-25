import { useEffect, useState } from "react";
import { useProject } from "../hooks/use-project";

export function Kata9() {
  const { addTask, changeName, project, removeTask } = useProject();
  const [newTask, setNewTask] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if(error !== "") {
        changeName("");
        setNewTask("");
        console.log(project);
    }
  };

  const pushTask = () => {
    if (newTask === "") {
      setError("New task cannot be empty");
    } else {
      addTask(newTask);
    }
  };

  useEffect(() => {
    if (project.projectName === "") {
      setError("Project name cannot be empty");
    } else if (project.tasks.length === 0) {
      setError("Project needs at least to have one task");
    } else {
      setError("");
    }
  }, [project]);

  return (
    <form onSubmit={handleSubmit}>
      {error && <span>{error}</span>}
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

          <button type="button" onClick={pushTask}>
            Add task
          </button>
        </div>
      </div>

      <div>
        {project.tasks.length > 0 &&
          project.tasks.map((t, idx) => (
            <div key={`${t}-${idx}`}>
              <span>{t}</span>
              <button onClick={() => removeTask(idx)}>Delete task</button>
            </div>
          ))}
      </div>
      <button type="submit">
          Submit
      </button>
    </form>
  );
}
