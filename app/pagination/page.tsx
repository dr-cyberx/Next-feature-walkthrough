"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function Posts() {
  const fetchPosts = async (key: any, nextUrl = "") => {
    const url = nextUrl || "https://jsonplaceholder.typicode.com/posts";
    const response = await axios.get(url);
    return response.data.slice(0, 4);
  };

  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage }: any =
    useInfiniteQuery(["posts"], fetchPosts, {
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.length > 0 ? lastPage.slice(-1)[0].id : null;
        return nextPage
          ? `https://jsonplaceholder.typicode.com/posts?_start=${
              nextPage + 1
            }&_limit=10`
          : null;
      },
    });

  if (error) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <>
    <div className="max-w-7xl m-auto grid grid-cols-4 gap-10 mt-8">
      {data &&
        data.pages.map((page: any) =>
          page.map((item: any) => (
            <div
              key={item.id}
              className="w-72 h-64 flex flex-row flex-wrap justify-around text-center p-2 border-blue-400 rounded-md border-2 "
            >
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))
        )}
    </div>
      {hasNextPage && (
        <div className="max-w-7xl m-auto flex justify-center items-center p-10">
          <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? "Loading more..." : "Load More"}
          </button>
        </div>
      )}
    </>
  );
}

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
  );
};

export default App;
