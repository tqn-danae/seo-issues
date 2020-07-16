export default {
	title: "DANAE: Digital Art Network",
	description:
		"We create exhibitions and experiences allowing everyone to engage in art",
	canonical: "danae.io",
	keywords:
		"Digital art, new media, art experience, exhibitions, VR art, AR art",
	openGraph: {
		type: "website",
		url: "https://danae.io/",
		site_name: "DANAE: Digital Art Network",
		images: [
			{
				url: "https://danae.io/meta/fbmeta.png",
				width: 1200,
				height: 630,
				alt: "DANAE: Digital Art Network",
			},
		],
		description:
			"We create exhibitions and experiences allowing everyone to engage in art",
	},
	twitter: {
		cardType: "summary_large_image",
		handle: "@Danae__io",
		site: "@Danae__io",
	},
	additionalMetaTags: [
		// color
		{ name: "theme-color", content: "#ffffff" },
		// add to homescreen for ios
		{ name: "mobile-web-app-capable", content: "yes" },
		{ name: "apple-mobile-web-app-capable", content: "yes" },
		// Windows meta
		{
			name: "msapplication-square70x70logo",
			content: "https://danae.io/meta/icon_smalltile.png",
		},
		{
			name: "msapplication-square150x150logo",
			content: "https://danae.io/meta/icon_mediumtile.png",
		},
		{
			name: "msapplication-square310x310logo",
			content: "https://danae.io/meta/icon_largetile.png",
		},
		{
			name: "msapplication-wide310x150logo",
			content: "https://danae.io/meta/icon_widetile.png",
		},
	],
};
