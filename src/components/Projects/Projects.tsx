import styles from './Projects.module.scss';
import jobsPicture from '../../assets/pictures/jobs.png';
import ipTrackerPicture from '../../assets/pictures/ip-tracker.png';
import sunnysidePicture from '../../assets/pictures/sunnyside.png';
import todoAppPicture from '../../assets/pictures/todo.png';
import ProjectCard from './ProjectCard';
import { useRecoilValue } from 'recoil';
import { languageState } from 'state/atom';

export default function Projects() {
	const projectsToShow = [
		{
			title: 'Static Jobs Listings',
			descriptionPT: 'Listagem e filtragem de vagas com uso de React.JS',
			descriptionEN: 'Listing and filtering of jobs using React.JS',
			repoUrl: 'https://github.com/bgregi/static-jobs-listings-new',
			siteUrl: 'https://bgregi.github.io/static-jobs-listings-new/',
			image: jobsPicture,
		},
		{
			title: 'IP Address Tracker',
			descriptionPT:
				'Tracker de IP com uso das APIs externas IPify e LeafletJS',
			descriptionEN:
				'IP Tracker using the external APIs IPify and LeafletJS',
			repoUrl: 'https://github.com/bgregi/fm-ip-address-tracker',
			siteUrl: 'https://bgregi.github.io/fm-ip-address-tracker',
			image: ipTrackerPicture,
		},
		{
			title: 'To-Do App',
			descriptionPT:
				'Lista de tarefas com funcionalidades em JS e uso de SASS',
			descriptionEN:
				'To-do list with functionalities in JS and using SASS',
			repoUrl: 'https://github.com/bgregi/fm-todo-app',
			siteUrl: 'https://bgregi.github.io/fm-todo-app/',
			image: todoAppPicture,
		},
		{
			title: 'Sunnyside Agency Landing Page',
			descriptionPT:
				'Landing page com responsividade e uso de JS, SASS e CSS Grid',
			descriptionEN:
				'Landing page with responsivity using JS, SASS and CSS Grid',
			repoUrl: 'https://github.com/bgregi/fm-sunnyside-landing-page',
			siteUrl: 'https://bgregi.github.io/fm-sunnyside-landing-page/',
			image: sunnysidePicture,
		},
	];

	const language = useRecoilValue(languageState);

	return (
		<>
			<div>
				<div id='projects' className={styles.separator}></div>
				<h1>{language === 'pt-br' ? 'PROJETOS' : 'PROJECTS'}</h1>
				<p className={styles.projectsDescription}>
					{language === 'pt-br'
						? `Estas são as principais aplicações desenvolvidas por mim,
					mas tem mais no meu ${' '}`
						: `These are the main applications developed by me,
                    but there's more in my ${' '}`}
					<a className={styles.link}
						target='_blank'
						rel='noreferrer'
						href='https://github.com/bgregi'>
						GitHub
					</a>
				</p>
			</div>
			<div className={styles.projectList}>
				{projectsToShow.map((project) => (
					<ProjectCard key={project.title} {...project} />
				))}
			</div>
		</>
	);
}
