import PostList from "./post-list";
import { Suspense } from "react";

const Page = async () => {


  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5 text-violet-400 transition duration-300 ease-in-out hover:text-violet-600 hover:scale-105">
        Posts
      </h1>
      <Suspense fallback="loading...">
        <PostList />
      </Suspense>
    </main>
  );
}

export default Page;
