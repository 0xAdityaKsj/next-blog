import Link from "next/link";
import prisma from "@/lib/db";

const PostList = async () => {

  const posts = await prisma.post.findMany();

  return (
    <ul className="space-y-2">
      {posts.map(post => (
        <li key={post.id} className="transform transition-all duration-300 ease-in-out hover:translate-x-2">
          <Link href={`/posts/${post.id}`} className="block py-2 px-3 text-zinc-800 hover:text-violet-600 transition-colors duration-300">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
