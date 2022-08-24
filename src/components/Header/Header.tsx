import { languageState } from 'state/atom';
import { useRecoilState } from 'recoil';
import styles from './Header.module.scss';
import NavButton from './NavButton';
import menuImage from '../../assets/svg/menu.svg';
import classNames from 'classnames';
import { useState } from 'react';

export default function Header() {
	const [language, setLanguage] = useRecoilState(languageState);
    const [menuOpen, setMenuOpen] = useState(false)

    function handleMenuClick() {
        if (menuOpen) {
            setMenuOpen(false)
        } else {
            setMenuOpen(true)
        }
    }

    function handleMenuBlur() {
        setMenuOpen(false)
    }

	const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setLanguage(event.target.value);
	};

	return (
		<header className={styles.header}>
			<button className={styles.logo}>BRUNO GERALDI</button>
			<div className={styles.right}>
				<button  onClick={handleMenuClick} className={styles.menuButton}>
					<img src={menuImage} alt='menu' />
				</button>
				<div onBlur={handleMenuBlur} tabIndex={0} className={classNames({
                    [styles.menuDesktop]: true,
                    [styles.menuMobile]: menuOpen
                })}>
					<NavButton
						name={language === 'pt-br' ? 'Início' : 'Home'}
						destinationId='home'
					/>
					<NavButton
						name={language === 'pt-br' ? 'Projetos' : 'Projects'}
						destinationId='projects'
					/>
					<NavButton
						name={language === 'pt-br' ? 'Estudos' : 'Studies'}
						destinationId='studies'
					/>
					<NavButton
						name={language === 'pt-br' ? 'Contato' : 'Contact'}
						destinationId='contact'
					/>
					<select
						onChange={changeLanguage}
						className={styles.select_language}>
						<option value='pt-br' className={styles.language}>
							PT/BR
						</option>
						<option value='en' className={styles.language}>
							EN
						</option>
					</select>
				</div>
			</div>
		</header>
	);
}
