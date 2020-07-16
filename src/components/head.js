import React from "react";
import NextHead from "next/head";

import PropTypes from "prop-types";

// const defaultDescription =
// 	"We create exhibitions and experiences allowing everyone to engage in art";
// const defaultKeywords =
// 	"Digital art, new media, art experience, exhibitions, VR art, AR art";
// const defaultOGURL = "https://danae.io/";
// const defaultOGImage = "https://danae.io/meta/fbmeta.png";
// const defaultTwitterImage = "https://danae.io/meta/twmeta.png";
// const defaultTitle = "DANAE: Digital Art Network";

const Head = () => (
	<NextHead>
		<meta charSet="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />

		<link
			rel="mask-icon"
			href="https://danae.io/meta/favicon-mask.svg"
			color="#000000"
		/>

		{/* Fonts */}
		<link
			href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
			rel="stylesheet"
		></link>
		{/* Chrome and iOS icons */}
		<link
			rel="icon"
			type="image/png"
			sizes="16x16"
			href="https://danae.io/meta/favicon.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="32x32"
			href="https://danae.io/meta/favicon_32.png"
		/>
		<link rel="shortcut icon" href="https://danae.io/meta/favicon.ico" />
		<link rel="apple-touch-icon" href="meta/icon.png" />
	</NextHead>
);

Head.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	keywords: PropTypes.string,
	url: PropTypes.string,
	ogImage: PropTypes.string,
};

export default Head;
