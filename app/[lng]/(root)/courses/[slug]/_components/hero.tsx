'use client'
import useTranslate from '@/hooks/use-lng'
import { Clock3 } from 'lucide-react'
import Image from 'next/image'
import { PiStudentBold } from 'react-icons/pi'
import ReactStars from 'react-rating-stars-component'
function Hero() {
	const t = useTranslate()
	return (
		<div>
			<h1 className='font-space-grotesk text-4xl font-bold'>
				Reactjs full course
			</h1>
			<p className='mt-4 text-muted-foreground'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas amet
				recusandae, ipsum
			</p>
			<div className='flex flex-wrap mt-4 items-center gap-6'>
				<div className='flex items-center gap-2'>
					<Image
						src='/author/samar.jpg'
						width={50}
						height={50}
						alt='author'
						className='rounded-full'
					/>
					<p className='font-space-grotesk font-bold'>Samar Badriddinov</p>
				</div>
				<div className='flex items-center gap-2 font-space-grotesk'>
					<p className='font-bold  text-yellow-500'>4.2</p>
					<ReactStars
						count={5}
						value={4.2}
						isHalf={true}
						edit={false}
						size={24}
						activeColor='#facc15'
					/>
					<p className='font-bold'>(199)</p>
				</div>
				<div className='flex items-center gap-2 font-space-grotesk'>
					<PiStudentBold className='!w-6 !h-6' />
					<p className='font-space-grotesk font-bold'>{t('students')}</p>
				</div>
				<div className='flex items-center gap-2 font-space-grotesk'>
					<Clock3 className='!w-6 !h-6' />
					<p className='font-space-grotesk font-bold'>{t('lastUpdated')}</p>
				</div>
			</div>
			<Image
				src='https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fa8573b7c-95b2-4459-8414-8eacde874b0a-kilwdl.png&w=1920&q=75'
				width={1920}
				height={1080}
				alt='course'
				className='mt-4 rounded-md object-cover'
			/>
		</div>
	)
}

export default Hero
