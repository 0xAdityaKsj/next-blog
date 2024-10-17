const Page = () => {
    return (
        <main className="text-center pt-16 px-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-violet-400 transition duration-300 ease-in-out hover:text-violet-600 hover:scale-105">
                Create Post
            </h1>
            <form className="flex justify-center items-center space-x-4">
                <input
                    type="text"
                    placeholder="Enter title"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                    required
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition duration-300 ease-in-out"
                >
                    Submit
                </button>
            </form>
        </main>
    );
}

export default Page;