import styles from './NavButton.module.scss';

interface INavButton {
    name: string
    destinationId: string
}

export default function Header({name, destinationId}: INavButton) {
	return (
		<div className={styles.buttonWrapper}>
			<button className={styles.nav_button}><a href={`#${destinationId}`}>{name}</a></button>
		</div>
	);
}