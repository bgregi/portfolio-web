import styles from './ProfilePicture.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { githubToken } from 'state/atom';

export default function ProfilePicture() {
	const [picture, setPicture] = useState();

    const token = useRecoilValue(githubToken)

	async function getUser() {
		await axios
			.get('https://api.github.com/users/bgregi', {
				headers: {
					Authorization: token,
				},
			})
			.then((response) => {
				setPicture(response.data.avatar_url);
			})
            .catch(error => console.error(error))
	}

	useEffect(() => {
		getUser();
	}, []);

	return <img className={styles.picture} src={picture} alt='Bruno' />;
}
