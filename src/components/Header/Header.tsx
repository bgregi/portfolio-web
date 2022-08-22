import { languageState } from 'state/atom';
import { useRecoilState } from 'recoil';
import styles from './Header.module.scss';
import NavButton from './NavButton';

export default function Header() {
    const [language, setLanguage] = useRecoilState(languageState)

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(event.target.value)
    }

	return (
		<header className={styles.header}>
			<button className={styles.logo}>BRUNO GERALDI</button>
			<div className={styles.right}>
				<NavButton name={language === 'pt-br' ? 'Início' : 'Home'}/>
				<NavButton name={language === 'pt-br' ? 'Projetos' : 'Projects'}/>
				<NavButton name={language === 'pt-br' ? 'Estudos' : 'Studies'}/>
				<NavButton name={language === 'pt-br' ? 'Contato' : 'Contact'}/>
				<select onChange={changeLanguage} className={styles.select_language}>
					<option value='pt-br' className={styles.language}>PT/BR</option>
					<option value='en' className={styles.language}>EN</option>
				</select>
			</div>
		</header>
	);
}
