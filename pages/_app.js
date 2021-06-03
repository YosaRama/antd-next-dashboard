// import "../styles/globals.css";
// import "antd/dist/antd.less"; // for the default styles from antd
import "../styles/antd.less"; // overwrite styles from antd
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
