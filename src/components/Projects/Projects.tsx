import styles from './Projects.module.scss';
import jobsPicture from '../../assets/pictures/jobs.png'
import ipTrackerPicture from '../../assets/pictures/ip-tracker.png'
import sunnysidePicture from '../../assets/pictures/sunnyside.png'
import todoAppPicture from '../../assets/pictures/todo.png'
import ProjectCard from './ProjectCard';

export default function Projects() {
	const projectsToShow = [
		{
			title: 'Static Jobs Listings',
			description: 'Listagem e filtragem de vagas com uso de React.JS',
			repoUrl: 'https://github.com/bgregi/static-jobs-listings-new',
			siteUrl: 'https://bgregi.github.io/static-jobs-listings-new/',
			image: jobsPicture
		},
		{
			title: 'IP Address Tracker',
			description: 'Tracker de IP com uso das APIs externas IPify e LeafletJS',
			repoUrl: 'https://github.com/bgregi/fm-ip-address-tracker',
			siteUrl: 'https://bgregi.github.io/fm-ip-address-tracker',
			image: ipTrackerPicture
		},
		{
			title: 'To-Do App',
			description: 'Lista de tarefas com funcionalidades em JS e uso de SASS',
			repoUrl: 'https://github.com/bgregi/fm-todo-app',
			siteUrl: 'https://bgregi.github.io/fm-todo-app/',
			image: sunnysidePicture
		},
		{
			title: 'Sunnyside Agency Landing Page',
			description: 'Landing page com responsividade e uso de JS, SASS e CSS Grid',
			repoUrl: 'https://github.com/bgregi/fm-sunnyside-landing-page',
			siteUrl: 'https://bgregi.github.io/fm-sunnyside-landing-page/',
			image: todoAppPicture
		}
	]

	return (
		<>
			<div>
				<div className={styles.separator}></div>
				<h1>PROJETOS</h1>
				<p className={styles.projectsDescription}>
					Estas são as principais aplicações desenvolvidas por mim,
					mas tem mais no meu {' '}
					<a
						target='_blank'
						rel='noreferrer'
						href='https://github.com/bgregi'>
						GitHub
					</a>
				</p>
			</div>
			<div className={styles.projectList}>{projectsToShow.map(project => <ProjectCard key={project.title} {...project} />)}</div>
		</>
	);
}
