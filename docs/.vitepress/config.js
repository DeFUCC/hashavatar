import { defineConfig } from "vitepress";
import Unocss from 'unocss/vite'
import { presetUno, presetIcons, transformerDirectives, extractorSplit } from "unocss";
import extractorPug from '@unocss/extractor-pug'


export default defineConfig({
	title: 'Hash-Avatar',
	titleTemplate: "Hash-Avatar public key visualizer",
	outDir: "../dist/",
	lang: 'en-US',
	themeConfig: {
		logo: '/avatar.png',
		siteTitle: 'Hash-Avatar',
		repo: "https://github.com/defucc/hashavatar",
		nav: [

		],
		footer: {
			message: 'MIT License',
			copyright: 'Copyright © 2020-PRESENT Davay42',
		},

	},
	head: [
		['meta', { name: 'theme-color', content: '#ffffff' }],
		['meta', { name: 'author', content: 'Davay42' }],
		['meta', { property: 'og:title', content: 'Hash-Avatar' }],
		['meta', { property: 'og:image', content: 'https://hashavatar.js.org/screenshot.png' }],
		['meta', { property: 'og:description', content: 'Public key human recognizable visual hash' }],
		['meta', { name: 'twitter:card', content: 'summary_large_image' }],
		['meta', { name: 'twitter:creator', content: '@davay42' }],
		['meta', { name: 'twitter:image', content: 'https://hashavatar.js.org/screenshot.jpg' }],
	],
	vue: {
		template: {
			compilerOptions: {
				isCustomElement: tag => tag == 'hash-avatar'
			}
		}
	},
	vite: {
		plugins: [
			Unocss({
				presets: [
					presetIcons({
						extraProperties: {
							'display': 'inline-block',
							'vertical-align': 'middle',
						},
					}),
					presetUno()
				],
				transformers: [
					transformerDirectives(),
				],
				extractors: [
					extractorPug(),
					extractorSplit,
				],
			}),
		]
	},
	transformHead({ pageData }) {
		return [
			process.env.NODE_ENV === "production" && ["script", { async: true, defer: true, "data-website-id": "32f68ceb-030d-4bf9-bb4c-a621ad7e1b54", src: "https://stat.defucc.me/script.js" }],
		]
	}
})