import { getCourses } from '@/actions/course-action'
import InstructorCourseCard from '@/components/cards/instructor-course-card'
import ReviewCard from '@/components/cards/overview-card'
import StatisticsCard from '@/components/cards/statistics-card'
import { auth } from '@clerk/nextjs'
import { MonitorPlay } from 'lucide-react'
import { GrMoney } from 'react-icons/gr'
import { PiStudent } from 'react-icons/pi'
import Header from '../_components/header'

async function Page() {
	const { userId } = auth()
	const result = await getCourses({ clerkId: userId! })
	return (
		<>
			<Header title='Dashboard' description='Welcome to your dashboard' />

			<div className='mt-4 grid grid-cols-3 gap-4'>
				<StatisticsCard
					label='Total courses'
					value={result.totalCourses.toString()}
					Icon={MonitorPlay}
				/>
				<StatisticsCard
					label='Total students'
					value='11.000'
					Icon={PiStudent}
				/>
				<StatisticsCard label='Total Sales' value='$190.00' Icon={GrMoney} />
			</div>

			<Header
				title='Latest courses'
				description='Here are your latest courses'
			/>

			{result.totalCourses > 0 ? (
				<div className='mt-4 grid grid-cols-3 gap-4'>
					{result.courses.map(course => (
						<InstructorCourseCard key={course.title} course={course} />
					))}
				</div>
			) : (
				<p className='text-muted-foreground mt-4 text-clip font-mono'>
					Sizda hozircha hech qanday kurs mavjud emas!
				</p>
			)}
			<Header title='Reviews' description='Here are your latest reviews' />
			<div className='mt-4 grid grid-cols-3 gap-4'>
				<div className='rounded-md bg-background px-4 pb-4'>
					<ReviewCard />
				</div>
				<div className='rounded-md bg-background px-4 pb-4'>
					<ReviewCard />
				</div>
				<div className='rounded-md bg-background px-4 pb-4'>
					<ReviewCard />
				</div>
			</div>
		</>
	)
}

export default Page
