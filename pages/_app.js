// import "../styles/globals.css";
// import "antd/dist/antd.less"; // for the default styles from antd
import "../styles/antd.less"; // overwrite styles from antd
import Layout from "../components/layout/layout";
import { SWRConfig } from "swr";
import fetcher from "../config/api";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
