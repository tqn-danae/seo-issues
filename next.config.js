const nextConfig = {
	webpack(config, options) {
		config.node = {
			fs: "empty",
		};
		config.module.rules.push({
			test: /\.(png|woff|woff2|eot|ttf|svg|ico)$/,
			use: [
				options.defaultLoaders.babel,
				{
					loader: "url-loader?limit=100000",
				},
				{
					loader: "file-loader",
				},
			],
		});
		return config;
	},
};

module.exports = nextConfig;
