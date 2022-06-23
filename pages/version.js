import Link from "next/link";
import Meta from "../components/Meta";

const version = () => {
  return (
    <div className="divStyle">
      <Meta title="Version | XingLi News" />
      <Link href="/version">
        <>
          <h1>This is Version page.</h1>
          <h2>Version 1.0.0</h2>
          <Link href="/">Go Back</Link>
        </>
      </Link>
    </div>
  );
};

export default version;
