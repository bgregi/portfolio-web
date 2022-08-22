import Message from './Message';
import ProfilePicture from './ProfilePicture';
import styles from './Home.module.scss';

export default function Home() {
	return (
		<div className={styles.home}>
			<Message />
			<ProfilePicture />
		</div>
	);
}
