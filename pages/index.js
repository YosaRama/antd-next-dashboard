import { Card } from "antd";
import { Fragment } from "react";
import Image from "next/image";

const { Meta } = Card;

function Homepage() {
  return (
    <Fragment>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <Image
            alt="example"
            src="/pizza.jpg"
            height="300px"
            width="200px"
            objectFit="cover"
          />
        }
      >
        <Meta title="Gosha Kitchen" description="www.instagram.com" />
      </Card>
    </Fragment>
  );
}

export default Homepage;
