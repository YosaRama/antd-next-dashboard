import "../styles/globals.css";
import "antd/dist/antd.less"; // for the default styles from antd
import "../styles/antd.less"; // overwrite styles from antd

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
