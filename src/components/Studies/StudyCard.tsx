import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { languageState } from 'state/atom';
import styles from './StudyCard.module.scss';

interface ICourse {
	company: string;
	completedCoursesPT: string[];
	completedCoursesEN: string[];
	courseUrl: string;
}

export default function StudyCard({
	company,
	completedCoursesPT,
	completedCoursesEN,
	courseUrl,
}: ICourse) {
	const language = useRecoilValue(languageState);

    const [arrowClass, setArrowClass] = useState(styles.arrow)
    const [coursesClass, setCoursesClass] = useState(styles.coursesHidden)
    const [studyCardClass, setStudyCardClass] = useState(styles.studyCardHidden)

    function handleClick() {
        setArrowClass(arrowClass === styles.arrow ? styles.inverted : styles.arrow)
        setCoursesClass(coursesClass === styles.coursesHidden ? styles.coursesShown : styles.coursesHidden)
        setStudyCardClass(studyCardClass === styles.studyCardHidden ? styles.studyCardShown : styles.studyCardHidden)        
    }

	let coursesShown = [];

	if (language === 'pt-br') {
		coursesShown = completedCoursesPT.map((course, i) => (
			<li key={i}>{course}</li>
		));
	} else {
		coursesShown = completedCoursesEN.map((course, i) => (
			<li key={i}>{course}</li>
		));
	}

	return (
		<div
			className={studyCardClass}
			onClick={handleClick}>
			<div className={styles.title}>
				<h2><a className={styles.courseUrl} href={courseUrl} target='_blank' rel="noreferrer">{company}</a></h2>
				<div className={arrowClass}></div>
			</div>
			<div className={coursesClass}>{coursesShown}</div>
		</div>
	);
}
