import { useRecoilValue } from 'recoil';
import { languageState } from 'state/atom';
import styles from './Studies.module.scss';
import StudyCard from './StudyCard';

export default function Studies() {
	const language = useRecoilValue(languageState);

	const coursesList = [
		{
			company: 'Rocketseat',
			completedCoursesPT: [
				'Guia estelar de programação',
				'Guia estelar de HTML',
				'Guia estelar de CSS',
				'Guia estelar de JavaScript',
				'Guia estelar de GIT',
				'Guia estelar de GitHub',
				'Guia estelar de HTTP',
			],
			completedCoursesEN: [
				'Programming Stellar Guide',
				'HTML Stellar Guide',
				'CSS Stellar Guide',
				'JavaScript Stellar Guide',
				'GIT Stellar Guide',
				'GitHub Stellar Guide',
				'HTTP Stellar Guide',
			],
            courseUrl: 'https://www.rocketseat.com.br/discover'
		},
		{
			company: 'Cod3r',
			completedCoursesPT: [
				'Curso Web Moderno Completo com Javascript 2021',
			],
			completedCoursesEN: [
				'Complete Modern Web Course with Javascript 2021',
			],
            courseUrl: 'https://www.cod3r.com.br/collections'

		},
		{
			company: 'Alura',
			completedCoursesPT: [
				'TypeScript parte 1: evoluindo seu JavaScript',
				'TypeScript parte 2: avançando na linguagem',
				'TypeScript parte 3: mais técnicas e boas práticas',
				'HTTP: Entendendo a web por baixo dos panos',
				'React: escrevendo com TypeScript',
				'React: lidando com arquivos estáticos',
				'React: conhecendo a biblioteca React Router',
				'React: integrando seu projeto React com APIs',
				'React: gerenciando estado com Recoil',
				'React: testando os seus componentes',
				'Microsserviços: padrões de projeto',
				'Microsserviços: explorando os conceitos',
			],
			completedCoursesEN: [
				'TypeScript Part 1: evolving Your JavaScript',
				'TypeScript part 2: advancing the language',
				'TypeScript part 3: more techniques and best practices',
				'HTTP: understanding the web behind the scenes',
				'React: writing with TypeScript',
				'React: dealing with static files',
				'React: getting to know the React Router library',
				'React: Integrating your React project with APIs',
				'React: managing state with Recoil',
				'React: testing your components',
				'Microservices: design patterns',
				'Microservices: exploring the concepts',
			],
            courseUrl: 'https://cursos.alura.com.br/formacoes'
		}
	]

	return (
		<>
			<div className={styles.separator}></div>
			<h1>{language === 'pt-br' ? 'ESTUDOS' : 'STUDIES'}</h1>
            <p className={styles.projectsDescription}>{language === 'pt-br' ? 'Estes são os cursos que completei desde 2021' : 'These are the courses I\'ve completed since 2021'}</p>
			<div className={styles.studyCards}>{coursesList.map(course => <StudyCard {...course}/>)}</div>
		</>
	);
}
