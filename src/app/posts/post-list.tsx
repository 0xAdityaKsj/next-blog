import Link from "next/link";

const PostList = async () => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    // Simulate a delay to demonstrate loading
    await delay(2000);

    const response = await fetch("https://dummyjson.com/posts?limit=10");
    const data = await response.json();
    return (
        <ul className="space-y-2">
            {data.posts.map(post => (
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