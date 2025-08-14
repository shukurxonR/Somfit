import { getFeaturedCourses } from '@/actions/course-action'
import Categories from './_components/categories'
import FilteredCourses from './_components/filter-courses'
import HomeHero from './_components/hero'
import Instructor from './_components/instructor'
import LearningJourney from './_components/learning-jorney'

async function HomePage() {
	const CoursesJSON = await getFeaturedCourses()
	const courses = JSON.parse(JSON.stringify(CoursesJSON))
	return (
		<>
			<HomeHero />
			<FilteredCourses courses={courses} />
			<Categories />
			<Instructor />
			<LearningJourney />
		</>
	)
}

export default HomePage
