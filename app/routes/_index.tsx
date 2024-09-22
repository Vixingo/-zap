import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Index() {
    return (
        <div
            className="flex h-screen items-center justify-center"
            style={{
                backgroundImage: "url(/a1.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex flex-col items-center gap-16 ">
                <header className="flex flex-col items-center gap-9 ">
                    <div className="max-w-[720px]">
                        <img
                            src="/logo-light.png"
                            alt="Remix"
                            className="block w-full dark:hidden"
                        />
                        <img
                            src="/a2.png"
                            alt="Remix"
                            className="hidden w-full dark:block"
                        />
                    </div>
                </header>
            </div>
        </div>
    );
}
