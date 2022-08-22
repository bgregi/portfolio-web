import styles from './NavButton.module.scss';

export default function Header(props: { name: string }) {
	return <button className={styles.nav_button}>{props.name}</button>;
}
