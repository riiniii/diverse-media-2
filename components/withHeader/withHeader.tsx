import { Header } from "../header";
import styles from "../header/styles/header.module.scss";

export const withHeader = (Component) => (
	props: any
) => (
	<>
		<Header />
		<div id={styles.mainContainer}>
			<Component />
		</div>
	</>
);