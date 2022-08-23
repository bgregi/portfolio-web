import { useRecoilValue } from 'recoil';
import { languageState } from 'state/atom';
import styles from './Contact.module.scss';
import githubImage from '../../assets/svg/github.svg'
import gmailImage from '../../assets/svg/gmail.svg'
import instagramImage from '../../assets/svg/instagram.svg'
import linkedinImage from '../../assets/svg/linkedin.svg'
import whatsappImage from '../../assets/svg/whatsapp.svg'
import ContactLink from './ContactLink';

export default function Contact() {
	const language = useRecoilValue(languageState);

    const contactLinks = [
        {
            image: githubImage,
            url: 'https://github.com/bgregi'
        },
        {
            image: linkedinImage,
            url: 'https://www.linkedin.com/in/bgregi/'
        },
        {
            image: whatsappImage,
            url: 'https://wa.me/5548988081772'
        },
        {
            image: instagramImage,
            url: 'https://www.instagram.com/brunogeraldi93/'
        },
        {
            image: gmailImage,
            url: 'mailto:bgeraldir@gmail.com'
        }
    ]

	return (
		<>
        <div className={styles.separator}></div>
			<h1>{language === 'pt-br' ? 'CONTATO' : 'CONTACT'}</h1>
            <p className={styles.contactDescription}>{language === 'pt-br' ? 'Se você gostou do meu trabalho e quer me conhecer melhor, use um dos links abaixo!' : 'If you liked my work and want to get to know me better, use one of the links below!'}</p>
            <div className={styles.contactLinks}>
                {contactLinks.map(contact => <ContactLink {...contact} />)}
            </div>

		</>
	);
}