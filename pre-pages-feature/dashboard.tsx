import { NextPage } from "next";
import React from "react";

const dashboard: NextPage = (props: any) => {
  console.log("props >> ", props?.products);
  return <div>This dashboard is inside Pages folder!

    <div className="container">
      {
        props?.products.map((item:any):JSX.Element => (
          <div className="container" key={item.title}>
            <h1>{item.title}</h1>
          </div>
        ))
      }
    </div>
  </div>;
};

export const getServerSideProps = async (req: any) => {
  const response = await fetch("https://fakestoreapi.com/products?limit=5");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
};
export default dashboard;
