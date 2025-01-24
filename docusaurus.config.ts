import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
  title: "Portfolio",
  tagline: "Portfolios are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://william-donnette.blog",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "william-donnette", // Usually your GitHub org/user name.
  projectName: "portfolio", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  plugins: [tailwindPlugin],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Portfolio",
      logo: {
        alt: "William Donnette",
        src: "img/IMG_5530.JPG",
        className: "rounded-full",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Formation Académique",
        // },
        { to: "/docs/intro", label: "Formation Académique", position: "left" },
        {
          to: "/docs/intro",
          label: "Expériences Professionnelles",
          position: "left",
        },
        { to: "/docs/intro", label: "Projets", position: "left" },
        { to: "/docs/intro", label: "Blog", position: "left" },
        {
          type: "search",
          position: "right",
        },
        {
          href: "https://gitlab.com/william-donnette",
          label: "GitLab",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Portfolio",
          items: [
            {
              label: "Formation Académique",
              to: "/docs/intro",
            },
            {
              label: "Expériences Professionnelles",
              to: "/docs/intro",
            },
            {
              label: "Projets",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "LinkedIn",
              href: "https://twitter.com/docusaurus",
            },
            {
              label: "Instagram",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitLab",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "GitHub",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} William Donnette Portfolio, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: "0CMHNGVUX0",
      apiKey: "fb8a8bf7f10a789e5c28ae7be4f70512",
      indexName: "test_index",
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
