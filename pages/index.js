import Head from "next/head";
import Main from "./main";

const Home = () => {
  return (
    <>
      <Head>
        <title>warendy</title>
        <meta name="warendy" content="recommend wine community"></meta>
      </Head>
      <Main />
    </>
  );
};

export default Home;
