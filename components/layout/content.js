import React from "react";
React.useLayoutEffect = React.useEffect;
import { Breadcrumb } from "antd";
import { Content } from "antd/lib/layout/layout";

function PageContent(props) {
  return (
    <Content style={{ margin: "0 16px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Restaurapp</Breadcrumb.Item>
        <Breadcrumb.Item>Homepage</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        {props.children}
      </div>
    </Content>
  );
}

export default PageContent;
