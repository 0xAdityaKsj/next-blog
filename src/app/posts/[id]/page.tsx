import PostItem from "./post-item";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {


  return (
    <Suspense fallback="Loading...">
      <PostItem params={params} />
    </Suspense>
  );
}
