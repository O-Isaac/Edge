import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import metatags from './meta.config.mjs';

// https://astro.build/config
export default defineConfig({
	site: "https://beta-edge-ui-docs.vercel.app",
	integrations: [
		starlight({
			title: 'Docs',
			head: metatags,
			logo: {
				src: "./src/assets/logo.webp"
			},
			social: {
				discord: 'https://discord.gg/5stwNU5M',
			},
			favicon: "/favicon.png",
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Mods',
					autogenerate: { directory: "mods" }
				},
			],
			components: {
				Head: "./src/components/HeadViewTransition.astro",
			}
		}),
	],
});
