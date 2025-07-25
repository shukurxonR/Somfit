'use client'

import { learningJourney } from '@/constants/const'
import useTranslate from '@/hooks/use-lng'
import Image from 'next/image'

function LearningJourney() {
	const t = useTranslate()
	return (
		<div className='container my-12 max-w-6xl mx-auto px-4'>
			<h1 className='text-2xl text-center font-space-grotesk font-bold'>
				{t('learnJourney')}
			</h1>
			<p className='max-w-4xl mx-auto text-center text-sm text-muted-foreground font-space-grotesk'>
				{t('learnJourneyDescription')}
			</p>
			<div className='mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
				{learningJourney.map(item => (
					<div
						key={item.title}
						className='flex flex-col items-center justify-center rounded-md bg-primary p-6 text-center'
					>
						<Image
							src={item.image}
							alt={item.title}
							width={70}
							height={70}
							className='object-contain'
						/>
						<h2 className='mt-2 line-clamp-1 font-space-grotesk text-lg font-bold text-secondary'>
							{t(item.title)}
						</h2>
						<p className='line-clamp-2 text-secondary'>{t(item.excerpt)}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default LearningJourney
