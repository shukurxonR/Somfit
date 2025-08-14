import { getCoursesById } from '@/actions/course-action'
import { getSections } from '@/actions/section-action'
import { Separator } from '@/components/ui/separator'
import { Images, LayoutPanelLeft, Settings } from 'lucide-react'
import Header from '../../_components/header'
import Actions from './_components/actions'
import CourseFields from './_components/course-fields'
import Description from './_components/description'
import Information from './_components/information'
import PreviewImage from './_components/preview-image'
import Price from './_components/price'
import Sections from './_components/sections'
import SelectFields from './_components/select-fields'

async function CourseSlug({ params }: { params: { courseid: string } }) {
	const courseJSON = await getCoursesById(params.courseid)
	const course = JSON.parse(JSON.stringify(courseJSON))
	//
	const SectionJSON = await getSections(params.courseid)
	const sections = JSON.parse(JSON.stringify(SectionJSON))
	console.log(course)
	return (
		<>
			<div className='flex items-center justify-between'>
				<Header
					title={course.title}
					description='Manage your course and see how it is performing.'
				/>
				<Actions {...course} />
			</div>
			<Separator className='my-3 bg-muted-foreground' />
			<div className='grid grid-cols-2 mt-6 gap-4'>
				<div className='flex flex-col space-y-2'>
					<div className='flex items-center gap-2 '>
						<span className='font-space-grotesk text-3xl font-medium'>
							Course Fields
						</span>
						<Settings />
					</div>
					<CourseFields {...course} />
					<Description {...course} />
					<Information {...course} />
					<SelectFields {...course} />
					<Price {...course} />
				</div>
				<div className='flex flex-col space-y-2'>
					{/* Sections */}
					<div className='flex items-center gap-2'>
						<span className='font-space-grotesk text-3xl font-medium'>
							Course Sections
						</span>{' '}
						<LayoutPanelLeft />
					</div>
					<Sections course={course} sections={sections} />
					{/* Preview image */}
					<div className='flex items-center gap-2'>
						<span className='font-space-grotesk text-3xl font-medium'>
							Preview Image
						</span>{' '}
						<Images />
					</div>
					<PreviewImage {...course} />
				</div>
			</div>
		</>
	)
}

export default CourseSlug
