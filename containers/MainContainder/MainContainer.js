import Head from "next/head";
import NavBar from "../../components/NavBar/";

const MainContainer = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
