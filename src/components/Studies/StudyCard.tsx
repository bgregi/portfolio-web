import { useRecoilValue } from "recoil"
import { languageState } from "state/atom"
import styles from './StudyCard.module.scss'

interface ICourse {
    company: string
    completedCoursesPT: string[]
    completedCoursesEN: string[]
    courseUrl: string
}

export default function StudyCard({company, completedCoursesPT, completedCoursesEN, courseUrl}: ICourse) {
    const language = useRecoilValue(languageState)

    let coursesShown = []

    if (language === 'pt-br') {
        coursesShown = completedCoursesPT.map(course => <li>{course}</li>)
    } else {
        coursesShown = completedCoursesEN.map(course => <li>{course}</li>)
    }

    function redirectToCourseSite(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        window.open(courseUrl)
        
        if (e.stopPropagation) e.stopPropagation();
    }

    return (
        <div className={styles.studyCard} onClick={redirectToCourseSite}>
            <h2>{company}</h2>
            <div>{coursesShown}</div>
        </div>
    )
}