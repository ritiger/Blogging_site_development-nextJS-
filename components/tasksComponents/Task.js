import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h5>
        {task.text}
        <FaTimes style={{ color: "red" }} onClick={() => onDelete(task.id)} />
      </h5>
      <p style={{ fontSize: "16px" }}>{task.day}</p>
    </div>
  );
};

export default Task;
