'use client'

import CategoryCard from '@/components/cards/category-card'
// import CategoryCard from '@/components/cards/category-card'
import { categoriess } from '@/constants/const'
import useTranslate from '@/hooks/use-lng'

function Categories() {
	const t = useTranslate()
	return (
		<div className='container max-w-6xl mx-auto py-12 px-4'>
			{' '}
			<div className='flex flex-col gap-1'>
				<h1 className='text-3xl font-space-grotesk font-bold'>
					{t('topCategories')}
				</h1>
				<p className='text-sm text-muted-foreground font-space-grotesk'>
					{t('topCategoriesDescription')}
				</p>
			</div>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-4 '>
				{categoriess.map((item, ind) => (
					<CategoryCard key={ind} {...item} />
				))}
			</div>
		</div>
	)
}
export default Categories
