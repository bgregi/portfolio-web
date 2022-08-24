import { useRecoilValue } from 'recoil';
import { languageState } from 'state/atom';
import styles from './Footer.module.scss';

export default function Footer() {
    const language = useRecoilValue(languageState);

    return (
        <footer className={styles.footer}>
            <p>{language === 'pt-br' ? 'Obrigado pela visita!' : 'Thanks for the visit!'}</p>
            <p>by {' '}<a href='https://github.com/bgregi' target='_blank' rel="noreferrer">bgregi</a> | {new Date().getFullYear()}</p>
        </footer>
    )

}