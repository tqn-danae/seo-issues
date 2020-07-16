import React from "react";
import { NextSeo } from "next-seo";

const ArticlePage = () => {
	return (
		<React.Fragment>
			<NextSeo
				title="Blog article"
				openGraph={{
					title: `This is a blog article`,
				}}
			/>
			<div>Specific blog article page</div>
		</React.Fragment>
	);
};

export default ArticlePage;

/**
 * @dev Fetches the get_articles routes and exports the name and id to define the available routes
 */
const getAllArticles = async () => {
	const result = await fetch("https://api.danae.io/api/get_articles");
	const articles = await result.json();
	return articles.results.map((article) => {
		const returnObject = {
			params: {
				title: article.formatted_name,
				id: article.id.toString(),
			},
		};
		console.log(returnObject);
		return returnObject;
	});
};

/**
 * @dev Defines the paths available to reach directly
 */
export async function getStaticPaths() {
	const paths = await getAllArticles();
	return {
		paths,
		fallback: false,
	};
}

/**
 *
 * @dev Export the article object to the EditArticlePage component above.
 */

export async function getStaticProps() {
	return {
		props: {},
	};
}
