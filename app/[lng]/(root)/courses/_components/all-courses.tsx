'use client'
import CoursesCard from '@/components/cards/courses-card'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { courses, filterCourses, filterLevels } from '@/constants/const'
import useTranslate from '@/hooks/use-lng'
function AllCourses() {
	const t = useTranslate()

	return (
		<div className='container mx-auto mt-12 max-w-6xl px-4'>
			<div className='flex items-center justify-between max-md:flex-col max-md:items-start max-md:space-y-2'>
				<h2>
					{t('result1')}{' '}
					<span className='font-space-grotesk font-bold'>250</span>{' '}
					{t('result2')}
				</h2>
				<div className='flex items-center gap-2'>
					<span>{t('sortBy')}</span>
					<Select>
						<SelectTrigger className='w-[120px] bg-gradient-to-r from-secondary to-background'>
							<SelectValue placeholder={t('filter')} />
						</SelectTrigger>
						<SelectContent>
							{filterCourses.map(item => (
								<SelectItem value={item.name} key={item.name}>
									{t(item.label)}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<Select>
						<SelectTrigger className='w-[120px] bg-gradient-to-l from-secondary to-background'>
							<SelectValue placeholder={t('level')} />
						</SelectTrigger>
						<SelectContent>
							{filterLevels.map(item => (
								<SelectItem value={item.name} key={item.name}>
									{t(item.label)}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
				{courses.map(itm => (
					<CoursesCard {...itm} key={itm.title} />
				))}
			</div>
		</div>
	)
}

export default AllCourses
