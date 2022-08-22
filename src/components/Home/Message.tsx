import { languageState } from 'state/atom';
import { useRecoilValue } from 'recoil';
import styles from './Message.module.scss';

export default function Message() {
	const language = useRecoilValue(languageState)

	let messageText = 'Olá! Sou o Bruno, programador autodidata, com formação em Engenharia Civil, mas com paixão pela programação. Conheça mais sobre mim abaixo!'

	if (language === 'en') {
		messageText = 'Hello! I\'m Bruno, a self-thought developer, graduated in Civil Engineering, but with a passion for programming. Learn more about me below!'
	}

	return (
		<div className={styles.message}>
			<div className={styles.messageText}>
				{messageText}
			</div>

		</div>
	);
}
