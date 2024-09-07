import Link from "next/link";

const LandingPage = () => {
    return (
        <main className="w-full h-full flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-1 text-center">
                <h1 className="text-4xl font-medium">Dangand UI</h1>
                <p className="text-base text-zinc-600 max-w-md dark:text-zinc-400">
                    Powerful project template and base UI with everything you
                    love from Next.js
                </p>
            </div>

            <Link href={"/docs"}>
                <button className="px-4 py-2.5 bg-blue-600 rounded-lg text-sm text-white font-medium">
                    Get Started
                </button>
            </Link>
        </main>
    );
};

export default LandingPage;
