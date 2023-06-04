import axios from "axios";

interface POST {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function sitemap() {
  const { data }: { data: POST[] } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const posts = data.map((post: POST) => ({
    url: `https://localhost:3000/post${post.id}`,
    lastModified: new Date().toISOString(),
    title: post.title,
  }));

  const routes = ["", "/about", "/post"].map((route: any) => ({
    url: `https://localhost:3000/${route}`,
    lastModified: new Date().toISOString(),
    title: route,
  }));

  return [...posts, ...routes];
}
