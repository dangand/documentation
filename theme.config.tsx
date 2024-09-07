import React from "react";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
    logo: <span>Dangand UI</span>,
    useNextSeoProps() {
        return {
            titleTemplate: "%s – Dangand UI",
        };
    },
    head: (
        <>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta property="og:title" content="Dangand UI" />
            <meta property="og:description" content="Dokumen rahasia negara" />
        </>
    ),
    banner: {
        key: "important-notice",
        text: (
            <a href="" target="_blank">
                Ini hanya untuk kebutuhan internal, yang buat juga developer
                pemula 🙏
            </a>
        ),
        dismissible: true,
    },
    project: {
        link: "https://github.com/dangand/base-ui",
    },
    sidebar: {
        defaultMenuCollapseLevel: 1,
        titleComponent({ title, type }) {
            if (type === "separator") {
                return <div style={{}}>{title}</div>;
            }

            if (title === "About") {
                return <>{title}</>;
            }
            return <>{title}</>;
        },
    },
    gitTimestamp: (props) => {
        const router = useRouter();

        if (router.pathname.startsWith("/docs")) {
            return (
                <p>
                    Terakhir diperbarui pada
                    {new Date(props.timestamp).toLocaleString()}
                </p>
            );
        } else {
            return <></>;
        }
    },
    // docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
    footer: {
        text: "Dangand UI | by rianllauo",
    },
};

export default config;
