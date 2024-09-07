import type { AppProps } from "next/app";

import "../styles/globals.css";
// import "@dangand/base-ui/dist/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}
