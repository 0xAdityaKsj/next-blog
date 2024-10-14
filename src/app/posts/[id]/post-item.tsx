import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const PostItem = async ({ params }: { params: Params }) => {
    const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
    const post = await response.json();
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(2000); // 2 second delay

    return (
        <div className="text-center px-5 pt-24">
            <h1 className="pb-5 text-5xl font-bold">{post.title}</h1>
            <p className="mx-auto max-w-[700px]">{post.body}</p>
        </div>
    );
}

export default PostItem;