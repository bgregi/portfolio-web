import styles from './ContactLink.module.scss';

interface IContact {
	image: string;
	url: string;
}

export default function ContactLink(props: IContact) {
	function redirectToUrl(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		window.open(props.url);

		if (e.stopPropagation) e.stopPropagation();
	}
	return (
		<div className={styles.contactWrapper}>
			<img
				onClick={redirectToUrl}
				className={styles.contact}
				src={props.image}
				alt='contact link'
			/>
		</div>
	);
}
