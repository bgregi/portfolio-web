import styles from './ProjectCard.module.scss';

interface IProject {
	title: string;
	description: string;
	repoUrl: string;
	siteUrl: string;
	image: string;
}

export default function ProjectCard({
	title,
	description,
	repoUrl,
	siteUrl,
	image,
}: IProject) {
	return <div className={styles.card}>
        <img className={styles.image} src={image} alt='repo 1' />
        <div className={styles.cardInfo}>
            <h2>{title}</h2>
            <p>{description}</p>
            <h3><a target='_blank' rel="noreferrer" href={repoUrl}>Repositório Github</a></h3>
            <h3><a target='_blank' rel="noreferrer" href={siteUrl}>Live Site</a></h3>
        </div>
    </div>;
}
