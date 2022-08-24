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
        coursesShown = completedCoursesPT.map((course, i) => <li key={i}>{course}</li>)
    } else {
        coursesShown = completedCoursesEN.map((course, i) => <li key={i}>{course}</li>)
    }

    return (
        <div className={styles.studyCard} onClick={() => window.open(courseUrl)}>
            <h2>{company}</h2>
            <div>{coursesShown}</div>
        </div>
    )
}