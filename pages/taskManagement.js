import Link from "next/link";
import Meta from "../components/Meta";

const taskManagement = () => {
  return (
    <div>
      <Meta title="TaskManagement | XingLi News" />
      <h1>This is Taskmanagement page.</h1>
      <Link href="/">
        <div className="divStyle">
          <button className="btn">Go Homepage</button>
        </div>
      </Link>
    </div>
  );
};

export default taskManagement;
