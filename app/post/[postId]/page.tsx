import axios from "axios";
import { Metadata } from "next";
import React, { FC } from "react";

interface PageProps {
  params: { [keyName: string]: string };
  searchParams: string;
}

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  return { title: data.title };
}

const page = async ({ params }: PageProps) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  return (
    <div>
      <h1>Dynamic Route!</h1>

      <div className="container">{JSON.stringify(data)}</div>
    </div>
  );
};

export default page;
