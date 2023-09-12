import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import Logo from "./components/Logo";

export default {
  logo: <Logo />,
  docsRepositoryBase: "https://github.com/O-Isaac/Edge-UI-Docs/tree/master",
  banner: {
    key: 'lamas-release',
    text: (
      <a href="https://edge-ui-docs.vercel.app/documentation/widgets/detection-meter" target="_blank">
        🎉 Detection Meter Replace is released. Read more →
      </a>
    )
  },
  project: {
    link: "https://discord.gg/5stwNU5M",
    icon: (
      <svg fill="currentColor" viewBox="0 0 16 16" height="24" width="24">
        <path d="M13.545 2.907a13.227 13.227 0 00-3.257-1.011.05.05 0 00-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 00-3.658 0 8.258 8.258 0 00-.412-.833.051.051 0 00-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 00-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 003.995 2.02.05.05 0 00.056-.019c.308-.42.582-.863.818-1.329a.05.05 0 00-.01-.059.051.051 0 00-.018-.011 8.875 8.875 0 01-1.248-.595.05.05 0 01-.02-.066.051.051 0 01.015-.019c.084-.063.168-.129.248-.195a.05.05 0 01.051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 01.053.007c.08.066.164.132.248.195a.051.051 0 01-.004.085 8.254 8.254 0 01-1.249.594.05.05 0 00-.03.03.052.052 0 00.003.041c.24.465.515.909.817 1.329a.05.05 0 00.056.019 13.235 13.235 0 004.001-2.02.049.049 0 00.021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 00-.02-.019zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612z" />
      </svg>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Edge UI",
    };
  },
  primaryHue: 36,
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url = "https://edge-ui-docs.vercel.app/" + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "Edge UI"} />
        <meta property="og:description" content={frontMatter.description || "Ultimate Interface Overhaul"} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://edge-ui-docs.vercel.app/" />
        <meta property="twitter:url" content="https://edge-ui-docs.vercel.app/" />
        <meta name="twitter:title" content={url} />
        <meta name="twitter:description" content={frontMatter.description || "Ultimate Interface Overhaul"} />
        <meta name="twitter:image" content="https://edge-ui-docs.vercel.app/images/LamasTinyHud-Reskin.png" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta name="theme-color" content="#d69c3f" />
      </>
    );
  },
};
