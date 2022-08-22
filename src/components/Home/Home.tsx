import styles from './Home.module.scss';
import { useRecoilValue } from 'recoil';
import { languageState } from 'state/atom';
import profilePicture from '../../assets/pictures/profilePicture.jpeg';

export default function Home() {
	const language = useRecoilValue(languageState)

	let messageText =
		'Olá! Sou o Bruno, programador autodidata, com formação em Engenharia Civil, mas com paixão pela programação. Conheça mais sobre mim abaixo!';

	if (language === 'en') {
		messageText =
			"Hello! I'm Bruno, a self-thought developer, graduated in Civil Engineering, but with a passion for programming. Learn more about me below!";
	}

	return (
		<div className={styles.home}>
			<div className={styles.message}>
				<p className={styles.messageText}>{messageText}</p>
			</div>
			<img className={styles.picture} src={profilePicture} alt='Bruno' />
		</div>
	);
}
