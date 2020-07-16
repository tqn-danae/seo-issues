import React from "react";
import { NextSeo } from "next-seo";

const ArtistPage = () => {
	return (
		<React.Fragment>
			<NextSeo
				title="Artist description"
				openGraph={{
					title: `This is an artist description`,
				}}
			/>
			<div>Artist description</div>
		</React.Fragment>
	);
};

export default ArtistPage;

/**
 * @dev Fetches the get_artists routes and exports the name and id to define the available routes
 */
const getAllArtists = async () => {
	const result = await fetch("https://api.danae.io/api/get_artists");
	const artists = await result.json();

	return artists.results.map((artist) => {
		const returnObject = {
			params: {
				name: artist.formatted_name,
				id: artist.id.toString(),
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
	const paths = await getAllArtists();
	return {
		paths,
		fallback: false,
	};
}

/**
 *
 * @dev Export the artist object to the EditArtistPage component above.
 */
export async function getStaticProps() {
	return {
		props: {},
	};
}
