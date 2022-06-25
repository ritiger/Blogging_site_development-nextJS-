import Link from "next/link";
import Meta from "../components/Meta";

const about = () => {
  return (
    <div>
      <Meta title="About | XingLi News" />
      <h1>This is About page.</h1>
      <Link href="/">
        <div className="divStyle">
          <button className="btnStyle">Go Homepage</button>
        </div>
      </Link>
    </div>
  );
};

export default about;
