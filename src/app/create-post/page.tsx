import { createPost } from "../actions/actions";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Page = async () => {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5 text-violet-400 transition duration-300 ease-in-out hover:text-violet-600 hover:scale-105">
        Create Post
      </h1>
      <form
        action={createPost}
        className="flex flex-col justify-center items-center space-y-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 transition duration-300 ease-in-out hover:shadow-lg"
          required
        />
        <textarea
          name="content"
          placeholder="Enter body"
          className="w-full max-w-md border border-gray-300 rounded-md shadow-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 transition duration-300 ease-in-out hover:shadow-lg"
          rows="5"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
        >
          Submit
        </button>
        <LogoutLink className="text-violet-500 hover:text-violet-600 transition duration-300 ease-in-out">
          Logout
        </LogoutLink>
      </form>
    </main>
  );
};

export default Page;

