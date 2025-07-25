'use client'
import { Button } from '@/components/ui/button'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import { companies } from '@/constants/const'
import useTranslate from '@/hooks/use-lng'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'

function HomeHero() {
	const t = useTranslate()
	return (
		<>
			<div className='container mx-auto grid min-h-[80vh] max-w-6xl grid-cols-2 gap-8 max-md:grid-cols-1 max-md:pt-32'>
				<div className='flex flex-col space-y-4 self-center px-4'>
					<h1 className='font-space-grotesk text-4xl font-bold'>
						{t('heroTitle')}
						<span className='text-blue-500'>{t('heroTitleSpan')}</span>
					</h1>
					<p className='text-muted-foreground'>{t('heroDescription')}</p>
					<div className='flex gap-4'>
						<Link href={'/courses'}>
							<Button variant={'outline'} size={'lg'}>
								{t('findCourses')}
							</Button>
						</Link>
						<Link href={'/courses'}>
							<Button size={'lg'}>{t('blogs')}</Button>
						</Link>
					</div>
				</div>

				<Image
					src='/assets/hero.png'
					alt='hero'
					width={520}
					height={520}
					className='self-end'
				/>
			</div>
			<div className='w-full bg-secondary'>
				<Carousel
					opts={{ align: 'start', loop: true }}
					plugins={[
						Autoplay({
							delay: 2000,
						}),
					]}
					className='max-w-6xl mx-auto px-4'
				>
					<CarouselContent>
						{companies.map((Icon, idx) => (
							<CarouselItem key={idx} className='basis-1/6 max-md:basis-1/4'>
								<Icon className='h-16 md:h-20 w-full' />
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</>
	)
}

export default HomeHero
