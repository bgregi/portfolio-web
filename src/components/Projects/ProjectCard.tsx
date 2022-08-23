import { useRecoilValue } from 'recoil';
import { languageState } from 'state/atom';
import styles from './ProjectCard.module.scss';

interface IProject {
	title: string;
	descriptionPT: string;
	descriptionEN: string;
	repoUrl: string;
	siteUrl: string;
	image: string;
}

export default function ProjectCard({
	title,
	descriptionPT,
	descriptionEN,
	repoUrl,
	siteUrl,
	image,
}: IProject) {
    const language = useRecoilValue(languageState)

    function redirectToLiveSite(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        window.open(siteUrl)
        
        if (e.stopPropagation) e.stopPropagation();
    }

    function redirectToRepo(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        window.open(repoUrl)
        
        if (e.stopPropagation) e.stopPropagation();
    }

	return (
		<div className={styles.card} onClick={redirectToLiveSite}>
			<img className={styles.image} src={image} alt='repository' />
			<div className={styles.cardInfo}>
				<h2>{title}</h2>
				<p>{language === 'pt-br' ? descriptionPT : descriptionEN}</p>
				<h3 onClick={redirectToRepo}>{language === 'pt-br' ? 'Repositório Github' : 'Github Repository'}</h3>
			</div>
		</div>
	);
}
