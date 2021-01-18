import "./styles/global.scss";
// https://nextjs.org/blog/next-9-3#built-in-sass-support-for-global-stylesheets
import "./styles/main.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
