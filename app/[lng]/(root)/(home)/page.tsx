import Categories from './_components/categories'
import FilteredCourses from './_components/filter-courses'
import HomeHero from './_components/hero'
import Instructor from './_components/instructor'
import LearningJourney from './_components/learning-jorney'

function HomePage() {
	return (
		<>
			<HomeHero />
			<FilteredCourses />
			<Categories />
			<Instructor />
			<LearningJourney />
		</>
	)
}

export default HomePage
