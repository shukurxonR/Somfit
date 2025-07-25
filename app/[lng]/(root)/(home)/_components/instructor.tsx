'use client'

import InsructorCard from '@/components/cards/instructor-card'
// import InsructorCard from '@/components/cards/instructor-card'
import { Button } from '@/components/ui/button'
import { instructors } from '@/constants/const'
import useTranslate from '@/hooks/use-lng'
import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'

function Instructor() {
	const t = useTranslate()
	return (
		<div className='container mx-auto max-w-6xl py-12 px-4'>
			<div className='flex items-center justify-between'>
				<div className='flex flex-col gap-1'>
					<h1 className='text-3xl font-space-grotesk font-bold'>
						{t('learnInstructors')}
					</h1>
					<p className='text-sm text-muted-foreground font-space-grotesk'>
						{t('learnInstructorsDescription')}
					</p>
				</div>
				<div className='flex items-center self-end gap-1'>
					<Button variant={'secondary'}>
						<span>{t('viewAll')}</span>
						<MoveUpRight className='ml-2 font-bold' />
					</Button>
				</div>
			</div>

			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-4'>
				{instructors.map(item => (
					<InsructorCard key={item.name} {...item} />
				))}
			</div>
			<div className='mt-6 text-center text-sm'>
				{t('becomeInstructor1')}{' '}
				<Link
					href={'/become-instructor'}
					className='text-blue-500 underline hover:text-blue-600'
				>
					{t('becomeInstructor2')}
				</Link>
			</div>
		</div>
	)
}

export default Instructor
