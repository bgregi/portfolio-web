import styles from './ContactLink.module.scss';

interface IContact {
	image: string;
	url: string;
}

export default function ContactLink(props: IContact) {
	return (
		<div className={styles.contactWrapper}>
			<img
				onClick={() => window.open(props.url)}
				className={styles.contact}
				src={props.image}
				alt='contact link'
			/>
		</div>
	);
}
