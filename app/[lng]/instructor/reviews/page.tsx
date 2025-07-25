import InstructorReviewCard from '@/components/cards/instructor-reviews-card'
import { Separator } from '@/components/ui/separator'
import Header from '../_components/header'

function Page() {
	return (
		<>
			<Header
				title='Reviews'
				description='Here  your can see all the reviews for you courses'
			/>
			<div className='mt-4 rounded-md  bg-background p-4'>
				<h3 className='font-space-grotesk text-lg font-medium'>All Review</h3>
				<Separator className='my-3' />
				<div className='flex flex-col gap-4'>
					<InstructorReviewCard />
					<InstructorReviewCard />
					<InstructorReviewCard />
				</div>
			</div>
		</>
	)
}

export default Page
