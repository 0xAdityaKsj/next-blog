const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-[1100px] mx-auto min-h-screen bg-white flex flex-col">{children}</div>

    );
}

export default Container;