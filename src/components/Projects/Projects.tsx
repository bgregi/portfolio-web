import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { githubToken } from 'state/atom';
import styles from './Projects.module.scss';

interface IRepositoryInfo {
	title: string
	url: string
	image: string
}

export default function Projects() {
	const [repos, setRepos] = useState<IRepositoryInfo[]>([])	
	const token = useRecoilValue(githubToken)	
	const projectsToShow = [
		'fm-sunnyside-landing-page',
		'fm-todo-app',
		'fm-ip-address-tracker',
		'static-jobs-listings-new',
	]

	useEffect(() => {
		// getInfoFromGithub(projectsToShow)
	}, [])
	
	// gets repo title (description), image (from raw.githubusercontent.com) and url (html_title)
	async function getInfoFromGithub(projects: string[]) {
		await Promise.all(
			projects.map(async (project: string) => {
				await axios
				.get(`https://api.github.com/repos/bgregi/${project}`, {
					headers: {
						Authorization: token,
					},
				})
				.then(response => setRepos([...repos, {
					title: response.data.description,
					url: response.data.html_url,
					image: `https://raw.githubusercontent.com/bgregi/${project}/main/screenshot.png`
				}]))
				.catch(error => console.log(error))
			})
			)
			console.log(repos)
	}


	return (
		<div>
			<div>
				<h1>PROJETOS</h1>
				<p>
					Estas são as principais aplicações desenvolvidas por mim,
					mas tem mais no meu{' '}
					<a
						target='_blank'
						rel='noreferrer'
						href='https://github.com/bgregi'>
						GitHub
					</a>
				</p>
			</div>
			<div></div>
		</div>
	);
}
