import React from "react";
import App from "next/app";
import PropTypes from "prop-types";

import Head from "../src/components/head.js";
import { DefaultSeo } from "next-seo";
import SEO from "../src/utils/seo.js";

function DanaeApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<Head />
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</React.Fragment>
	);
}

DanaeApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext);
	return { ...appProps };
};

DanaeApp.propTypes = {
	Component: PropTypes.func,
	pageProps: PropTypes.object,
};

export default DanaeApp;
