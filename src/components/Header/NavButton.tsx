import styles from './NavButton.module.scss';

export default function Header(props: { name: string }) {
	return (
		<div className={styles.buttonWrapper}>
			<button className={styles.nav_button}>{props.name}</button>
		</div>
	);
}
