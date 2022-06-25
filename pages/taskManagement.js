import { useState } from "react";
import Link from "next/link";
import Meta from "../components/Meta";

import Header from "../components/tasksComponents/Header";
import Home from "../components/tasksComponents/Home";

const TaskManagement = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div>
      <Meta title="TaskManagement | XingLi News" />
      <div className="container">
        <Header
          onShow={() => setShowAddTask(!showAddTask)}
          showAddTask={showAddTask}
        />
        <Home showAddTask={showAddTask} />
      </div>
      <Link href="/">
        <div className="divStyle">
          <button className="btnStyle">Go Homepage</button>
        </div>
      </Link>
    </div>
  );
};

export default TaskManagement;
