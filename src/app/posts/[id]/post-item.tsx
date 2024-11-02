import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import prisma from "@/lib/db";

const PostItem = async ({ params }: { params: Params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id)
    }
  });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="text-center px-5 pt-24">
      <h1 className="pb-5 text-5xl font-bold">{post.title}</h1>
      <p className="mx-auto max-w-[700px]">{post.body}</p>
    </div>
  );
};

export default PostItem;
