import { IInstructor } from '@/types'
import Image from 'next/image'

function InsructorCard(instructor: IInstructor) {
	return (
		<div className='flex flex-col gap-1'>
			<div className='relative max-sm:h-48 h-72 w-full '>
				<Image
					src={instructor.image}
					alt={instructor.name}
					fill
					className='rounded-md object-cover'
				/>
			</div>
			<h1 className='font-space-grotesk text-2xl font-bold'>
				{instructor.name}
			</h1>
			<h3 className='font-medium text-muted-foreground'> {instructor.name}</h3>
		</div>
	)
}

export default InsructorCard
