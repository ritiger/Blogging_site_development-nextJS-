import { useState, useEffect } from "react";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Meta from "./Meta";

const Layout = ({ children }) => {
  const [flag, setFlag] = useState(false);

  const onHandleClick = () => {
    setFlag(!flag);
  };

  useEffect(() => {
    console.log("[FLAG]", flag);
  }, [flag]);

  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {flag ? (
            <h1 style={{ color: "red" }}>Hello</h1>
          ) : (
            <h1 style={{ color: "blue" }}>Welcome</h1>
          )}
          <button className="btn" onClick={onHandleClick}>
            Button
          </button>
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Layout;
