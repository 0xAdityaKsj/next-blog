import Link from "next/link";

const PostList = async () => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    // Simulate a delay to demonstrate loading
    await delay(2000);

    const response = await fetch("https://dummyjson.com/posts?limit=10");
    const data = await response.json();
    return (
        <ul>
            {data.posts.map(post => (
                <li key={post.id}>
                    <Link href={`/posts/${post.id}`} className="bg-slate-500 mb-1 inline text-white">{post.title}</Link>
                </li>
            ))}
        </ul>
    );
}

export default PostList;