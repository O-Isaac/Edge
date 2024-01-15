import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://edge-ui-docs.vercel.app",
	integrations: [
		starlight({
			title: 'Docs',
			logo: {
				src: "./src/assets/logo.webp"
			},
			social: {
				discord: 'https://discord.gg/5stwNU5M'
			},
			favicon: "/favicon.png",
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Mods',
					autogenerate: { directory: "mods" }
				},
				// {
				// 	label: 'FAQ',
				// 	autogenerate: { directory: "guides" }
				// },
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
